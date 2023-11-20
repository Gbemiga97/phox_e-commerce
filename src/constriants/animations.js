


 const tagVariants = {
    "offscreen": {
        opacity: 0,
        y: 10
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "easeIn",
            duration: .9
         }
    }
}

const secTitleVariants = {
    "offscreen": {
        opacity: 0,
        y: 20
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "easeIn",
            duration: 1
        }
    }
}




const titleVariants = {
    "offscreen": {
        opacity: 0,
        y: 30
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "easeIn",
            duration: 1.1
        }
    }
}

const btnVariants = {
    "offscreen": {
        opacity: 0,
        y: 35
    },
    "onscreen": {
        opacity: 1,
        y: 0,
        transition: {
            type: "easeIn",
            duration: 1.2
         }
    }
}


const containerVariants = (delay = 0) => ({
    "offscreen": {
        opacity: 0,
    },
    "onscreen": {
        opacity: 1,
        transition: {
            type: "easeIn",
            duration: 2,
            delay
        }
    }
})


const priceBtnVariants= {
    "offscreen":{
        opacity : 0 ,
    },
    "onscreen" :{
        opacity: 1,
        transition: {
            type: "easeIn",
            duration: '2',
        },
        
    }
    } 



    const productDisplayVariants = (x = 0, delay = 0) => ({
        'offscreen': {
            opacity: 0,
            x
        },
       'onscreen': {
            opacity: 1,
            x: 0,
            transition: {
                type: "easeIn",
                duration: .5,
                delay
            }
        }
    })




    const secVariants = {
        "offscreen": {
            opacity: 0,
            y: 30
        },
        "onscreen": {
            opacity: 1,
            y: 0,
            transition: {
                type: "easeIn",
                duration: 2
            }
        }
    }

    const imgVariants = {
        "offscreen": {
            opacity: 0,
            y: -40
        },
        "onscreen": {
            opacity: 1,
            y: 0,
            transition: {
                type: "easeIn",
                duration: 2.5
            }
        }
    }

const animations = { tagVariants, secTitleVariants, titleVariants, btnVariants, secVariants, imgVariants, containerVariants, priceBtnVariants, productDisplayVariants}

export default animations