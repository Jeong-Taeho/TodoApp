export const parse = (querystring) =>
    // '?name=jth&position=mid'
    //&로 쪼갠다
    //key-value의 조합을 object 형태로 만든다
    //만들어진걸 리턴한다   
    querystring.split('&').reduce((acc,keyAndValue)=> {
        const [key,value] = keyAndValue.split('=')
        if(key && value){
            acc[key] = value
        }
        return acc
    }, {})