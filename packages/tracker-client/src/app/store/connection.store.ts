import { create } from "zustand"
import { devtools } from 'zustand/middleware'

interface ConnectionState {
    isConnected : boolean
    host : string | undefined
    setConnection : (host:string) => void
}

export const useConnectionStore = create<ConnectionState>()(
    devtools(
        (set) => ({
            isConnected : false,
            host : undefined,
            setConnection : (host:string) => set((x) => ({...x,isConnected:true,host:host})),
        })
    )
)