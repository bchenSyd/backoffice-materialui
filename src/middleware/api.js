import 'isomorphic-fetch'
import {CALL_API, Get_API_HOST} from '../common/constants'


function callApi({endpoint, _headers, body, method = 'get'}) {
  const API_HOST = Get_API_HOST()
  const fullUrl = (endpoint.indexOf(API_HOST) === -1) ? API_HOST + endpoint : endpoint
  let headers = _headers ? _headers : {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
  const accessToken = window.localStorage.getItem('accessToken')
  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`
  }
  return fetch(fullUrl, {
    method,
    headers,
    body
  })
    .then(response =>
      response.json().then(json => ({ json, response }))
    ).then(({ json, response }) => {
      if (!response.ok) {
        return Promise.reject(json)
      }
      return {payload:json, headers:response.headers}
    }).catch(function(error){
        return Promise.reject(error)
    })
}

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
  const callAPI = action[CALL_API]
  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint, method, headers, body, types } = callAPI  

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL.')
  }
 
  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }
  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }
 
  function actionWith(data) {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [ requestType, successType, failureType ] = types
   next(actionWith({ type: requestType }))

  return callApi({endpoint, headers, body, method}).then(
    response => next(actionWith({
      ...response,
      type: successType
    })),
    error => next(actionWith({
      type: failureType,
      error: error.message || 'Something bad happened'
    }))
  )
}
