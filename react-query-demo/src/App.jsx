import { useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import{ReactQueryDevtools} from "@tanstack/react-query-devtools"
import PostsComponents from './components/PostsComponents'
import viteLogo from '/vite.svg'
import './App.css'


const queryClient = new QueryClient();


function App() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <div style={{padding:"20px"}}>
        <h1>React Query</h1>
        <PostsComponents />
      </div>
      <ReactQueryDevtools  initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default App
