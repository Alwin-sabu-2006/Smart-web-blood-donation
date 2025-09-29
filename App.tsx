import React, { useState, createContext, useMemo, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FindDonorsPage from './pages/FindDonorsPage';
import RequestBloodPage from './pages/RequestBloodPage';
import BloodBanksPage from './pages/BloodBanksPage';
import ProfilePage from './pages/ProfilePage';
import AdminPage from './pages/AdminPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import EmergencyPage from './pages/EmergencyPage';
import WellnessPage from './pages/WellnessPage';
import NotificationsPage from './pages/NotificationsPage';
import { User } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import DonateBloodPage from './pages/DonateBloodPage';
import { getUnreadNotificationCount } from './data/store';
import ActiveRequestsPage from './pages/ActiveRequestsPage';

// --- Interfaces & Contexts ---

interface AuthContextType {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
}

interface NotificationContextType {
  unreadCount: number;
  refreshUnreadCount: () => void;
}

interface Toast {
  id: number;
  message: string;
}

interface ToastContextType {
  addToast: (message: string) => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const NotificationContext = createContext<NotificationContextType>({
  unreadCount: 0,
  refreshUnreadCount: () => {},
});

export const ToastContext = createContext<ToastContextType>({
    addToast: () => {},
});


// --- Toast Components ---

const Toast: React.FC<{ message: string; onDismiss: () => void }> = ({ message, onDismiss }) => {
    useEffect(() => {
        const timer = setTimeout(onDismiss, 5000);
        return () => clearTimeout(timer);
    }, [onDismiss]);

    return (
        <div className="bg-gray-800 text-white py-3 px-5 rounded-lg shadow-xl mb-2 flex items-center justify-between animate-fade-in-up">
            <span>{message}</span>
            <button onClick={onDismiss} className="ml-4 text-gray-400 hover:text-white">&times;</button>
        </div>
    );
};

const ToastContainer: React.FC<{ toasts: Toast[]; removeToast: (id: number) => void }> = ({ toasts, removeToast }) => {
    return (
        <>
            <div className="fixed bottom-4 right-4 z-[100] w-full max-w-sm">
                {toasts.map(toast => (
                    <Toast key={toast.id} message={toast.message} onDismiss={() => removeToast(toast.id)} />
                ))}
            </div>
            <style>{`
                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.3s ease-out forwards;
                }
            `}</style>
        </>
    );
};


// --- Main App Component ---

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [unreadCount, setUnreadCount] = useState(0);
  const [toasts, setToasts] = useState<Toast[]>([]);

  const authContextValue = useMemo(() => ({
    user: currentUser,
    login: (user: User) => setCurrentUser(user),
    logout: () => setCurrentUser(null),
  }), [currentUser]);
  
  const refreshUnreadCount = () => {
      if (currentUser) {
          setUnreadCount(getUnreadNotificationCount(currentUser.id));
      } else {
          setUnreadCount(0);
      }
  };

  useEffect(() => {
      refreshUnreadCount();
  }, [currentUser]);

  const addToast = (message: string) => {
      const id = Date.now();
      setToasts(prev => [...prev, { id, message }]);
  };
  
  const removeToast = (id: number) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      <NotificationContext.Provider value={{ unreadCount, refreshUnreadCount }}>
        <ToastContext.Provider value={{ addToast }}>
          <HashRouter>
            <div className="flex flex-col min-h-screen bg-gray-50">
              <Header />
              <main className="flex-grow">
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/find-donors" element={<FindDonorsPage />} />
                  <Route path="/request-blood" element={<RequestBloodPage />} />
                  <Route path="/active-requests" element={<ActiveRequestsPage />} />
                  <Route path="/donate-blood" element={<DonateBloodPage />} />
                  <Route path="/blood-banks" element={<BloodBanksPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                  <Route path="/admin" element={<AdminPage />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/emergency-numbers" element={<EmergencyPage />} />
                  <Route path="/wellness" element={<WellnessPage />} />
                  <Route path="/notifications" element={<NotificationsPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <ToastContainer toasts={toasts} removeToast={removeToast} />
          </HashRouter>
        </ToastContext.Provider>
      </NotificationContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;