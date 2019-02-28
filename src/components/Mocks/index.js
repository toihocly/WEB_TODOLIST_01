const uuidv4 = require('uuid/v4');


module.exports ={
    items:[
        {
          id:uuidv4(),
          name:'ABC',
          level: 0 // 0 Small, 1 Medium, 2 High
        },
        {
          id:uuidv4(),
          name:'Def',
          level: 1 // 0 Small, 1 Medium, 2 High
        },
        {
          id:uuidv4(),
          name:'Dev',
          level:  1// 0 Small, 1 Medium, 2 High
        },
        {
          id:uuidv4(),
          name:'FrontEnd',
          level: 0 // 0 Small, 1 Medium, 2 High
        },
        {
          id:uuidv4(),
          name:'BackEnd',
          level: 2 // 0 Small, 1 Medium, 2 High
        }
      ],
      
}