
function mean(params) {
    let sum = 0
    let nums = params.split(',')
    for (c of nums){
            if (c === ''){
                return 'Nums are required'
            }
            else if (!parseInt(c)){
                return `${c} is not a number`
            }
            else {
            sum += parseInt(c)
            }
        }
    const response = {
        operation : 'mean' ,
        value : sum / nums.length
    }

    return response
}

function median (params) {

    let temp = params.split(',')
    for (c of temp){
           
        if (c === ' '){
            return 'Nums are required'
        }
        else if ( !parseInt(c) ){
            return `${c} is not a number`
        }
    }
    const temp2 = temp.map(c => parseInt(c))
    const nums = temp2.sort((a, b) => (a - b))
    if (nums.length % 2 === 0){
        const response = {
            operation : 'median' ,
            value : (parseInt(nums[parseFloat(Math.floor((nums.length -1) /2))]) + parseInt(nums[parseFloat(Math.ceil((nums.length -1) /2))])) /2,
            
            }
        return response
    }
    if (nums.length % 2 != 0){
        const response = {
            operation : 'median' ,
           
            value : parseInt(nums[(nums.length -1) /2]),
           
            }
        return response
    }

    
}
function mode (params) {
        let temp = params.split(',')
        const numCount = {}
        let modeResult = 0
        
        for (c of temp){
           
                if (c === ' '){
                    return 'Nums are required'
                }
                else if ( !parseInt(c) ){
                    return `${c} is not a number`
                }
            }
        const temp2 = temp.map(c => parseInt(c))
        const nums = temp2.sort((a, b) => (a - b))
        for (c of nums) {
            if (numCount[c]){
                numCount[c] += 1
            }
            else {numCount[c] = 1}
        }
        modeResult = nums[0]
        for (key in numCount){
            if (numCount[key] > numCount[modeResult]){
                console.log(key, numCount[key])
                console.log(typeof(modeResult))
                modeResult = key
               
            } 
        }
        
      const response =  {
            operation: 'mode',
            value: modeResult,
            
    }
    return response
}


module.exports = {
    mean: mean,
    median:median,
    mode: mode
}