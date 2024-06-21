import axios from "@/lib/axios";

const TestPage = async () => {

    const {data} = await axios.get("/")
    // console.log(data.status)
    // console.log(data.statusText)
    // console.log(data.request)
    // console.log(data.config)
    // console.log(data.headers)
    console.log(data)

    return ( 
        <div>
            test page
            <p>
                {data}
            </p>
        </div>
     );
}
 
export default TestPage;