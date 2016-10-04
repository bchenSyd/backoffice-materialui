var payload  = require('./payload')
import _ from 'lodash'


const searchSite = keyword => {
    const {sites, categories} = payload
    keyword = keyword.toUpperCase()
    const cat_result = _.chain(categories).filter(
        cat => cat.description.toUpperCase().indexOf(keyword) !== -1)
        .map(cat => cat.id).value()
    let site_result = _.filter(sites, site => {
        let {siteName, categoryIds} = site
        return siteName.toUpperCase().indexOf(keyword) !== -1
            || _.find(categoryIds, catId => cat_result.indexOf(catId) !== -1)
    })
    return site_result
}

const searchApi={
    search: (keyword) => {
        return new Promise( resolve => {
            setTimeout(function () {
                //first return a collection of sites that contains the keyword
                let result_col = keyword.split(',').map(
                        keyword=> keyword && searchSite(keyword.trim()))
                result_col = _(result_col).flatten().filter(c=>c).value()
                //use site.id as key to return a distince collection
                const search_result = _.unionBy(result_col,result=>result.id)
                resolve(search_result)
            }, 500)
        })
    }
}

export default searchApi