/* eslint-disable */
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import Layout from './Layout'
import routes from './routes'
import { RecoilRoot } from 'recoil'
import './index.css'
// import * as serviceWorker from './serviceWorker'

ReactDOM.render(
    <React.StrictMode>
        <RecoilRoot>
            <Layout>
                <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
            </Layout>
        </RecoilRoot>
    </React.StrictMode>,
    document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
