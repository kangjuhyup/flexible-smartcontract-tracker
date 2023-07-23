import { useState } from "react";

const useDashboard = () => {
    const [connection,setConnection] = useState<{
        isConnected : boolean,
        host? : string,
    }>({isConnected : false})

    const handleConnect = (host:string) => {
        // host 정보 세팅
        setConnection((x) => ({...x,host:host}));
    }

    return {
        connection,
        handleConnect
    }

}

export default useDashboard;