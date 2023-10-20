"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("next-auth/react");
function AccessDenied() {
    return (<>
      <h1>Access Denied</h1>
      <p>
        <a href="/api/auth/signin" onClick={(e) => {
            e.preventDefault();
            (0, react_2.signIn)();
        }}>
          You must be signed in to view this page
        </a>
      </p>
    </>);
}
exports.default = AccessDenied;
