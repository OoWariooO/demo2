//改变属性状态
export const setMenuItems=(state,data)=>{
    state.getMenuItems = data;
  }
  //将匹配到的对象在数组中删除
export const  removeItems=(state,data)=>{
    state.getMenuItems.forEach((item,index) => {
      if(item === data){
        state.getMenuItems.splice(index,1);
      }
    });
  }
  //同步新添加的数据
export const pushToMenuItems=(state,data)=>{
    state.getMenuItems.push(data)
  }
export const userStatus=(state,user)=>{
    if(user){
      state.currentUser = user;
      state.isLogin=true;

    }else{
      state.currentUser = null;
      state.isLogin = false;
    }
  }