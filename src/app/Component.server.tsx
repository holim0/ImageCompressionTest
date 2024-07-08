

const getData = async () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
          resolve({data: "hello"});
        }, 1000);
      });
}

const ServerComponent = async () =>{

    const server = await getData()
    
    return <div>
        <h1>server component</h1>
        <h1>{server?.data}</h1>
    </div>
}

export default ServerComponent