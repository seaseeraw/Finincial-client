// import axios from 'axios';
// const rootApEp = "http://localhost:8000/api/v1"
// const apiProcessor =async({method, url,data}) => {
//     try{
//         const response = await  axios({
//             method,
//             url,
//             data,
//         });
//         return response.data;
//     }catch(error){
//             return{
// status:'error',
// message: error.message,
//             };
//         }
//     };
    
// export const postNewUser = (data) =>{
// const obj = {
// method:"post",
// url:rootApEp + "/users",
// data,
// };
// return apiProcessor();

//     };

import axios from 'axios';

const rootApEp = "http://localhost:8000/api/v1";

const apiProcessor = async ({ method, url, data }) => {
    try {
        const response = await axios({
            method,
            url,
            data,
        });
        return response.data;
    } catch (error) {
        return {
            status: 'error',
            message: error.message,
        };
    }
};

export const postNewUser = (data) => {
    const obj = {
        method: "post",
        url: rootApEp + "/users",
        data,
    };
    return apiProcessor(obj); // Pass `obj` to `apiProcessor`
};
