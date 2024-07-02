module.exports=(cards, product) => {
    
    let  output=cards.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%TITLE%}/g, product.title)
    output = output.replace(/{%CATEGORY%}/g, product.category)
    output = output.replace(/{%PRICE%}/g, Math.round((product.price)))
    output = output.replace(/{%TITLE%}/g, product.title)
    output = output.replace(/{%DESCRIPTION%}/g, product.description)
    output = output.replace(/{%ID%}/g, product.id)

    if (!product.type) {
        output = output.replace(/{%NOT_IMPORTED%}/g, 'not_imported')
    }

    return output

}