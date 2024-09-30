import { useLocation } from 'react-router-dom';

import React from 'react'

export const useActiveLink = (path) => {
    const { pathname } = useLocation();
    return pathname === path;
}