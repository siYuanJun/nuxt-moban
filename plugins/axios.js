export default function ({$axios, redirect}) {
  $axios.onResponse(res => {
    return res
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    switch (code) {
      //错误代码
      case 401:
        sessionStorage.clear();
        redirect('/login')
        break;
      case 403:
        sessionStorage.clear();
        redirect('/login')
        break;
      case 404:
        sessionStorage.clear();
        break;
      case 500:
        Message.error("Server exception");
        break;
      case 502:
        Message.error("Bad Gateway");
        break;
      case 503:
        Message.error(error.message);
        break;
      case 504:
        Message.error(error.message);
        break;
      default:
        break;
    }
  });
}