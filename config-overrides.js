
const {injectBablePlugin} = require('react-app-rewired');


model.exports = function override(config, env){
 config = injectBablePlugin(['import', {libraryName: 'antd-mobile', style: 'css'}], config)
 return config; 
}