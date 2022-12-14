import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import Home from 'pages/Home';
import Greeting from 'pages/council-info/Greeting';
import Organization from 'pages/council-info/Organization';
import Location from 'pages/council-info/Location';
import Rules from 'pages/Rules';
import RulesPost from 'components/rules/post/Post';
import Conference from 'pages/Conference';
import InquiryBoard from 'pages/communication/InquiryBoard';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import Pledge from 'pages/council/Pledge';
// import Editor from 'pages/communication/Editor';
import ConferenceEditor from 'pages/ConferenceEditor';
import PetitionBoard from 'pages/communication/petition/PetitionBoard';
import PetitionPost from 'components/boards/petition/post/Post';
import PetitionEditor from 'pages/communication/petition/Editor';
import News from 'pages/council/News';
import Admin from 'pages/Admin';
import SuggestionBoard from 'pages/communication/suggestion/SuggestionBoard';
import SuggestionPost from 'components/boards/suggestion/post/Post';
import SuggestionEditor from 'pages/communication/suggestion/Editor';

import NotFound from 'pages/NotFound';
import NewsPost from 'components/news/post/Post';
import GlobalBanner from 'components/global/banner/GlobalBanner';
import Gnb from 'components/global/nav/Gnb';
import Footer from 'components/global/footer/Footer';
import Makers from 'components/global/footer/sub-routes/Makers';
import Term from 'components/global/footer/sub-routes/Term';
import PrivacyPolicy from 'components/global/footer/sub-routes/PrivacyPolicy';
import { LoginStateAtom } from 'atoms/LoginState';
import Success from 'components/sign-up/Succes';

function Router() {
  const [{ isLoggedIn, admin }, setLoginState] = useRecoilState(LoginStateAtom);
  const [cookies] = useCookies(['X-AUTH-TOKEN', 'isAdmin']);
  useEffect(() => {
    setLoginState({
      isLoggedIn: !!cookies['X-AUTH-TOKEN'],
      admin: cookies.isAdmin === 'true',
    });
  }, []);

  return (
    <BrowserRouter>
      <Gnb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={isLoggedIn ? <Navigate to="/" /> : <Login />}
        />
        <Route
          path="/sign-up"
          element={
            <>
              <GlobalBanner title="????????????" detail="???????????? ?????????." />
              <SignUp />
            </>
          }
        />
        <Route
          path="/sign-up"
          element={
            <>
              <GlobalBanner title="????????????" detail="???????????? ?????????." />
              <SignUp />
            </>
          }
        />
        <Route path="/sign-up/success" element={<Success />} />
        <Route path="/greeting" element={<Greeting />} />
        <Route path="/organization" element={<Organization />} />
        <Route path="/location" element={<Location />} />
        <Route path="/pledge" element={<Pledge />} />
        <Route
          path="/council-news"
          element={
            <>
              <GlobalBanner title="????????????" detail="???????????? ?????????." />
              <News />
            </>
          }
        />
        <Route
          path="/news"
          element={
            <>
              <GlobalBanner title="????????????" detail="???????????? ?????????." />
              <NewsPost />
            </>
          }
        />
        <Route
          path="/rules"
          element={isLoggedIn ? <Rules /> : <Navigate to="/login" />}
        />
        <Route
          path="/rule"
          element={
            isLoggedIn ? (
              <>
                <GlobalBanner
                  title="?????? ??? ??????"
                  detail="?????? ??? ?????? ?????????."
                />
                <RulesPost />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/conference"
          element={
            isLoggedIn ? (
              <>
                <GlobalBanner title="?????????" detail="????????? ?????????." />
                <Conference />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/conference/editor"
          element={
            isLoggedIn ? (
              <>
                <GlobalBanner title="???????????????" detail="??????????????? ?????????." />
                <ConferenceEditor />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
          path="/editor"
          element={
            isLoggedIn ? (
              <>
                <GlobalBanner title="???????????????" detail="??????????????? ?????????." />
                {/* <Editor /> */}
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/board-petition">
          <Route path="/board-petition" element={<NotFound />} />
          <Route
            path="boards"
            element={
              isLoggedIn ? (
                <>
                  <GlobalBanner
                    title="???????????????"
                    detail="??????????????? ?????????."
                  />
                  <PetitionBoard />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="board"
            element={
              isLoggedIn ? (
                <>
                  <GlobalBanner
                    title="???????????????"
                    detail="??????????????? ?????????."
                  />
                  <PetitionPost />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="editor"
            element={
              isLoggedIn ? (
                <>
                  <GlobalBanner
                    title="???????????????"
                    detail="??????????????? ?????????."
                  />
                  <PetitionEditor />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Route>
        <Route path="/board-suggestion">
          <Route path="/board-suggestion" element={<NotFound />} />
          <Route
            path="boards"
            element={
              isLoggedIn ? (
                <>
                  <GlobalBanner
                    title="???????????????"
                    detail="??????????????? ?????????."
                  />
                  <SuggestionBoard />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="board"
            element={
              isLoggedIn ? (
                <>
                  <GlobalBanner
                    title="???????????????"
                    detail="??????????????? ?????????."
                  />
                  <SuggestionPost />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="editor"
            element={
              isLoggedIn ? (
                <>
                  <GlobalBanner
                    title="???????????????"
                    detail="??????????????? ?????????."
                  />
                  <SuggestionEditor />
                </>
              ) : (
                <Navigate to="/login" />
              )
            }
          />
        </Route>
        <Route
          path="/board-inquiry"
          element={
            <>
              <GlobalBanner title="???????????????" detail="??????????????? ?????????." />
              <InquiryBoard />
            </>
          }
        />
        <Route path="/who-made-this" element={<Makers />} />
        <Route path="/term" element={<Term />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/admin"
          element={admin ? <Admin /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
