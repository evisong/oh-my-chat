import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import reactLogo from '../assets/react.svg';

const mockThreads = [
  {
    id: 1,
    contactId: 1,
    updateTime: '2023-11-04',
    latestMessage: '书的主题是现代React Web应用的设计开发实践。',
  },
  {
    id: 2,
    contactId: 2,
    updateTime: '2023-11-03',
    latestMessage: '有的，就叫《我聊》。',
  },
  {
    id: 3,
    contactId: 3,
    updateTime: '2023-11-02',
    latestMessage: '现代React Web应用设计开发实践',
  },
  {
    id: 4,
    contactId: 4,
    updateTime: '2023-11-02',
    latestMessage: 'Web应用的名字叫《我聊》',
  },
  {
    id: 5,
    contactId: 5,
    updateTime: '2023-10-31',
    latestMessage: '项目名为oh-my-chat',
  },
];

const mockContacts = [
  {
    id: 1,
    name: '小帅',
    avatar: reactLogo,
  },
  {
    id: 2,
    name: '小白',
    avatar: reactLogo,
  },
  {
    id: 3,
    name: '小美',
    avatar: reactLogo,
  },
  {
    id: 4,
    name: '大壮',
    avatar: reactLogo,
  },
  {
    id: 5,
    name: '老宋',
    avatar: reactLogo,
  },
  {
    id: 6,
    name: '贾姐',
    avatar: reactLogo,
  },
];

const useChatStore = create(
  immer((set, get) => ({
    threads: mockThreads,
    addThread: (thread) =>
      set((state) => {
        thread.id = state.threads.length + 1;
        state.threads.push(thread);
      }),
    removeThread: (threadId) =>
      set((state) => {
        state.threads = state.threads.filter(
          (thread) => thread.id !== threadId
        );
      }),

    contacts: mockContacts,
    addContact: (contact) =>
      set((state) => {
        contact.id = state.contacts.length + 1;
        state.contacts.push(contact);
      }),
    updateContact: (contact) =>
      set((state) => {
        const idx = state.contacts.findIndex((c) => c.id === contact.id);
        if (idx !== -1) {
          state.contacts[idx] = contact;
        }
      }),
    removeContact: (contactId) => {
      const thread = get().threads.find((t) => t.contactId === contactId);
      if (thread) {
        get().removeThread(thread.id);
      }
      set((state) => {
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== contactId
        );
      });
    },

    selectedContactId: null,
    selectContactById: (contactId) =>
      set((state) => {
        state.selectedContactId = contactId;
      }),
  }))
);

export default useChatStore;
