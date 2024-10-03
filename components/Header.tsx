'use client';
import Link from 'next/link'
import React, { useState } from 'react'
import NewsSearch from './NewsSearch';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <Link href="/" className="flex items-center">
            <span className="sr-only">ACONEWS</span>
            <svg className="h-8 w-auto sm:h-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">ACONEWS</span>
          </Link>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button
            type="button"
            className="bg-white dark:bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <nav className="hidden md:flex space-x-10">
          <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Home
          </Link>
          <Link href="/categories" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            Categories
          </Link>
          <Link href="/about" className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            About
          </Link>
        </nav>
        <div className="border border-gray-500 py-2 px-3 rounded-lg ">
          <Link href={'/search'}>Search</Link>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header