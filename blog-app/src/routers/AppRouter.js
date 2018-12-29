import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// 一般公開ルート
import PublicRoute from './PublicRouter';
// 管理者（記事投稿者）ルート
import PrivateRoute from './PrivateRouter';


// ホームページ
import HomePage from '../components/HomePage';


// 記事一覧ページ
import PostsListPage from '../components/PostsListPage';
// 記事詳細ページ
import PostDetailPage from '../components/PostDetailPage';


// Not Found ページ
import NotFoundPage from '../components/NotFoundPage';
// 連絡先ページ
import ContactPage from '../components/ContactPage';
// 管理者紹介ページ
import AboutPage from '../components/AboutPage';


// ログインページ
import LoginPage from '../components/LoginPage';


/////////////////
// 管理者用記事一覧ページ
import AdminPostsListPage from '../components/AdminPostsListPage';
// 記事投稿ページ
import AdminPostCreatePage from '../components/AdminPostCreatePage';
// 記事編集ページ
import AdminPostUpdatePage from '../components/AdminPostUpdatePage';
/////////////////


const AppRouter = () => (
  <BrowserRouter>
    <div>  
      <Switch> 
        {/* ホームページ */}
        <PublicRoute path="/" component={HomePage} exact={true} />
        {/* 記事一覧ページ */}
        <PublicRoute path="/posts" component={PostsListPage} />
        {/* 記事詳細ページ */}
        <PublicRoute path="/post/:id" component={PostDetailPage} />
        {/* 管理者紹介ページ */}
        <PublicRoute path="/about" component={AboutPage} />
        {/* 連絡先ページ */}
        <PublicRoute path="/contact" component={ContactPage} />

        {/* ログインページ */}
        <Route path="/login" component={LoginPage}  />
        {/* 管理者用記事一覧ページ */}
        <PrivateRoute path="/adminPosts" component={AdminPostsListPage} />
        {/* 記事投稿ページ */}
        <PrivateRoute path="/createPost" component={AdminPostCreatePage} />
        {/* 記事編集ページ */}
        <PrivateRoute path="/updatePost/:id" component={AdminPostUpdatePage} />
        {/* Not Found ページ */}
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;