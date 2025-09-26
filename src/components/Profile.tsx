import { BookmarkAdd, CalendarDate, CalendarPlus02, Check, ChevronLeft, ChevronRight, Users01 } from '@scottylabs/corgi';
import { Link } from '@tanstack/react-router';
import React from 'react';

const USER_INFO = {
    name: 'Andrew Carnegie',
    major: 'Computer Science',
}

interface ProfileProps {
  isOpen: boolean;
  onClose: () => void;
}

function Profile({ isOpen, onClose }: ProfileProps)  {
  if (!isOpen) return null;

  const menuItems = [
    {
      icon: BookmarkAdd,
      label: 'Saved Courses',
      href: '/saved',
    },
    {
      icon: CalendarDate,
      label: 'Currently Taking',
      href: '/current',
    },
    {
      icon: Check,
      label: 'Courses Taken',
      href: '/completed',
    },
    {
      icon: CalendarPlus02,
      label: 'Schedule',
      href: '/schedule',
    },
    {
      icon: Users01,
      label: 'Friends',
      href: '/friends',
    },
  ];

  return (
    <div className="w-80 bg-white border-r border-bg-brandNeutral-subtle-pressed">
      <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="flex items-center justify-center text-fg-brandNeutral-primary p-1 rounded-lg transition hover:bg-bg-brandNeutral-subtle-pressed cursor-pointer"
          >
            Hide
            <ChevronLeft className="h-5 w-5" />
          </button>
        </div>

        <div className="px-4 pb-4">
          <h2 className="text-left text-lg text-fg-brandNeutral-primary mb-4">Profile</h2>

          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center flex-shrink-0">
                {/* TODO: add icon */}
            </div>
            <div className="flex flex-col items-start">
              <p className="font-semibold text-gray-900 text-base text-left">{USER_INFO.name}</p>
              <p className="text-sm text-gray-600 text-left">{USER_INFO.major}</p>
            </div>
          </div>
        </div>


        <div className="py-2">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-fg-brandNeutral-primary flex items-center justify-between px-4 py-3 hover:bg-bg-brandNeutral-subtle-pressed transition-colors"
              onClick={onClose}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="h-5 w-5 text-gray-600" />
                <span>{item.label}</span>
              </div>
              <ChevronRight className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
  );
};

export default Profile;