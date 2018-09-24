const state = {
    getMenuItems:{}
}
const getters = {

}
const mutations = {
    setMenuItems(state,data){
        state.getMenuItems = data;
      },
    removeItems(state,data){
        state.getMenuItems.forEach((item,index) => {
          if(item === data){
            state.getMenuItems.splice(index,1);
          }
        });
      },
      //同步新添加的数据
    pushToMenuItems(state,data){
        state.getMenuItems.push(data)
      }
}
const actions = {

}
export default{
    state,getters,mutations,actions
}