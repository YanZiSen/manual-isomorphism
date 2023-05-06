import { App } from "./App";
import { hydrateRoot } from "react-dom/client";
import React from 'react'

hydrateRoot(document.getElementById('root') as Element, <App />);