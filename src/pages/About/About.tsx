import { Fragment, type FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import {
  authCards,
  brandLabel,
  type AuthCard as AuthCardConfig,
  type RichTextToken,
} from '../../data/dbMassages';
import { authAPI } from '../../api/client';

const renderTokens = (tokens: RichTextToken[]) =>
  tokens.map((token, index) => (
    <span
      key={`${token.type}-${index}-${token.value}`}
      className={token.type === 'link' ? 'cursor-pointer font-semibold text-sky-600 hover:underline' : undefined}
    >
      {token.value}
    </span>
  ));

const AuthCard: FC<{ 
  config: AuthCardConfig; 
  onToggleForm?: () => void; 
  onSubmit?: (e: React.FormEvent) => void;
  onInputChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  formData?: Record<string, string>;
}> = ({ config, onToggleForm, onSubmit, onInputChange, formData }) => (
  <form
    onSubmit={onSubmit || ((event) => event.preventDefault())}
    className="flex w-full max-w-sm flex-col gap-5 rounded-2xl border border-slate-200 bg-white/95 p-8 shadow-xl shadow-slate-200/70 backdrop-blur-sm"
    aria-label={config.variant === 'login' ? 'Instagram style log in form' : 'Instagram style sign up form'}
  >
    <div className="text-center text-5xl font-bold italic text-slate-900" style={{ fontFamily: 'Brush Script MT, cursive' }}>
      {brandLabel}
    </div>

    {config.heading && (
      <p className="text-center text-base font-medium text-slate-500">{config.heading}</p>
    )}

    <div className="flex flex-col gap-3">
      {config.fields.map((field) => (
        <Fragment key={field.id}>
          <input
            type={field.type ?? 'text'}
            name={field.id}
            placeholder={field.placeholder}
            autoComplete="off"
            value={formData?.[field.id] || ''}
            onChange={onInputChange}
            className={`w-full rounded-lg border bg-slate-50 px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-200 ${
              field.errorText ? 'border-rose-500 focus:ring-rose-200' : 'border-slate-200'
            }`}
          />
          {field.errorText && (
            <span className="text-xs font-medium text-rose-500">{field.errorText}</span>
          )}
        </Fragment>
      ))}
    </div>

    {config.infoBlocks && (
      <div className="space-y-2 text-center text-xs leading-relaxed text-slate-500">
        {config.infoBlocks.map((tokens, idx) => (
          <p key={`info-${config.id}-${idx}`} className="px-2">
            {renderTokens(tokens)}
          </p>
        ))}
      </div>
    )}

    <button
      type="submit"
      className="w-full rounded-lg bg-sky-500 py-3 text-sm font-semibold tracking-wide text-white transition hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-sky-300"
    >
      {config.ctaLabel}
    </button>

    {config.showDivider && (
      <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
        <span className="h-px flex-1 bg-slate-200" />
        OR
        <span className="h-px flex-1 bg-slate-200" />
      </div>
    )}

    {config.supportLink && (
      <button
        type="button"
        className="text-center text-sm font-semibold text-sky-600 hover:underline focus:outline-none"
      >
        {config.supportLink}
      </button>
    )}

    {config.footer && (
      <div className="mt-2 border-t border-slate-200 pt-4 text-center text-sm text-slate-600">
        {config.footer.text}{' '}
        <span 
          onClick={onToggleForm}
          className="cursor-pointer font-semibold text-sky-600 hover:underline"
        >
          {config.footer.actionLabel}
        </span>
      </div>
    )}
  </form>
);

const About: FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  
  // Toggle between Login (index 2), Sign Up (index 0), and Sign Up Error (index 1)
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [showSignUpError, setShowSignUpError] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    username: '',
    password: '',
    login: '', // For login form username/email field
  });

  const toggleForm = () => {
    console.log('Toggle clicked! Current state:', isLoginForm);
    setIsLoginForm(!isLoginForm);
    setShowSignUpError(false); // Reset error state when switching forms
    setFormData({ email: '', fullName: '', username: '', password: '', login: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isValidEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted', formData);
    
    try {
      if (!isLoginForm) {
        // Sign Up — проверка email
        if (!formData.email.trim()) {
          setIsError(true);
          setSuccessMessage('Please enter your email');
          setShowSuccessModal(true);
          return;
        }
        if (!isValidEmail(formData.email)) {
          setIsError(true);
          setSuccessMessage('Please enter a valid email address (e.g. name@example.com)');
          setShowSuccessModal(true);
          return;
        }
        // Sign Up form - using REAL API
        const result = await authAPI.signup(
          formData.email,
          formData.fullName,
          formData.username,
          formData.password
        );

        if (result.success) {
          console.log('✅ Registration successful!', result.user);
          console.log('🔑 Token saved to localStorage');
          setIsError(false);
          setSuccessMessage(`Welcome ${result.user?.username}! Your account has been created.`);
          setShowSuccessModal(true);
          // Перенаправляем на Feed после регистрации
          setTimeout(() => {
            navigate('/feed');
          }, 2000);
        }
      } else {
        // Login form - using REAL API
        const result = await authAPI.login(formData.login, formData.password);
        
        if (result.success) {
          console.log('✅ Login successful!', result.user);
          console.log('🔑 Token saved to localStorage');
          setIsError(false);
          setSuccessMessage(`Welcome back ${result.user?.username}!`);
          setShowSuccessModal(true);
          // Перенаправляем на Feed после логина
          setTimeout(() => {
            navigate('/feed');
          }, 2000);
        }
      }
    } catch (error: any) {
      console.log('❌ Error:', error.message);
      if (!isLoginForm) {
        setShowSignUpError(true);
      }
      setIsError(true);
      setSuccessMessage(error.message || 'An error occurred');
      setShowSuccessModal(true);
    }
  };

  // Choose the correct card: Login, Sign Up, or Sign Up with Error
  const currentCard = isLoginForm 
    ? authCards[2] 
    : showSignUpError 
      ? authCards[1] 
      : authCards[0];
  
  console.log('Current form:', isLoginForm ? 'Login' : 'SignUp', 'Error:', showSignUpError, 'Card:', currentCard.id);

  return (
    <div 
      className="flex min-h-[calc(100vh-120px)] w-full items-center justify-center px-4 py-12"
      style={{
        backgroundImage: 'url(/src/assets/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
    >
      <img 
        src="/src/assets/page_not_found.png" 
        alt="Decorative background"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          maxHeight: '100vh',
          display: 'block',
          margin: '0 auto',
          padding: '0 8px',
          marginTop: '-60px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <AuthCard 
          config={currentCard} 
          onToggleForm={toggleForm} 
          onSubmit={handleSubmit}
          onInputChange={handleInputChange}
          formData={formData}
        />
      </div>
      
      {/* Success/Error Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl">
            <div className="mb-4 flex justify-center">
              <div className={`flex h-16 w-16 items-center justify-center rounded-full ${isError ? 'bg-red-100' : 'bg-green-100'}`}>
                {isError ? (
                  <svg className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </div>
            </div>
            <h3 className="mb-2 text-center text-xl font-semibold text-slate-900">
              {isError ? 'Error!' : 'Success!'}
            </h3>
            <p className="mb-6 text-center text-sm text-slate-600">{successMessage}</p>
            <button
              onClick={() => setShowSuccessModal(false)}
              className={`w-full rounded-lg py-3 text-sm font-semibold text-white transition ${
                isError 
                  ? 'bg-red-600 hover:bg-red-700' 
                  : 'bg-green-600 hover:bg-green-700'
              }`}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;