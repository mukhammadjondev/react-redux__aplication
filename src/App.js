import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Route, Routes } from "react-router-dom"
import { Main, Login, Register, Navbar, ArticleDetail } from './components'
import { getItem } from "./helpers/persistance-storage"
import AuthService from "./service/auth"
import { signUserSuccess } from "./slice/auth"
import ArticleService from './service/article'
import { getArticlesStart, getArticlesSuccess } from "./slice/article"

const App = () => {
  const dispatch = useDispatch()

  const getUser = async () => {
    try {
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      console.log(error)
    }
  }

  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
      const response = await ArticleService.getArticles()
      dispatch(getArticlesSuccess(response.articles))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const token = getItem('token')
    if(token) {
      getUser()
    }
    getArticles()
  }, [])

  return (
    <div className="container">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />
      </Routes>
    </div>
  )
}

export default App