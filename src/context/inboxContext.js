import React, { useState } from 'react';

export const InboxContext =  React.createContext();
export const InboxStore = ({ children }) => {
    const [showInbox, setShowInbox] = useState(false);

    return (
        <InboxContext.Provider value={{ showInbox, setShowInbox }}>
            {children}
        </InboxContext.Provider>
    );
};

export const useInboxContext = () => React.useContext(InboxContext);