export function request(url,method="get",data={}) {
  return fetchRequest(url,method,data);
}

function fetchRequest(url,method,data){
  let fetchConfig={};
  if(method.toLocaleLowerCase()==='post'){
    fetchConfig['method']=method.toLocaleLowerCase();
    fetchConfig['headers']={
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    if(data instanceof Object){
      let body="";
      for(let key in data){
        body+=`&${key}=${data[key]}`;
      }
      data=body.slice(1);
      fetchConfig['body']=data;
    }
  }else if(method.toLocaleLowerCase()==='file'){
    fetchConfig['method']='post';
    if(data instanceof Object){
      let formData=new FormData();
      for(let key in data){
        formData.append(key,data[key]);
      }
      fetchConfig['body']=formData;
    }
  }
  return fetch(url,fetchConfig).then(res=>res.json());
}

