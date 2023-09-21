import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { RouterLayout } from "./common/RouterLayout";
import { HomePage } from "./pages/home";
/*import { LoginPage } from "./pages/login";

import { RegisterPage } from "./pages/register";
import CardDetailsPage from "./pages/cardDetails";
import { CreateEventPage } from "./pages/CreateEvent";
*/
export const AppRouter: FC<{}> = () => {
    return(
        <Routes>
            <Route path="/" element={<RouterLayout />}>
                <Route path="/" element={<HomePage />} />
                {/*<Route path="/create" element={<CreateEventPage />} />
                <Route path="/card/:event_id" element={<CardDetailsPage />} />*/}
            </Route>
            {/*<Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/card/:event_id" element={<CardDetailsPage />} />*/}
        </Routes>
    );
};