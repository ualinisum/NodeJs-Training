"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkPermission = void 0;
const checkPermission = (request, responce, nextFunc) => {
    const userId = request.headers['user-id'];
    if (!userId) {
        responce.status(403).json({ error: 'User ID is required for this operation' });
    }
    else {
        nextFunc();
    }
};
exports.checkPermission = checkPermission;
