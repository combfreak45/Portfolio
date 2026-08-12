import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL       = import.meta.env.VITE_CONTACT_EMAIL;

const INITIAL = { from_name: '', from_email: '', message: '' };

function ErrorFallback({ id }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div id={id} className="mt-3 rounded border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/30 px-4 py-3 flex flex-col gap-2">
      <p id={`${id}-text`} className="text-xs text-red-600 dark:text-red-400">
        Message failed to send. Please reach out directly:
      </p>
      <div id={`${id}-copy-row`} className="flex items-center gap-2">
        <span id={`${id}-email`} className="text-xs font-medium text-slate-700 dark:text-slate-300">
          {CONTACT_EMAIL}
        </span>
        <button
          id={`${id}-copy-btn`}
          type="button"
          onClick={handleCopy}
          className="text-xs px-2 py-0.5 rounded border border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 hover:border-slate-500 dark:hover:border-slate-400 transition-colors"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default function ContactForm({ id }) {
  const formRef = useRef(null);
  const [values, setValues] = useState(INITIAL);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setValues(INITIAL);
    } catch {
      setStatus('error');
    }
  };

  return (
    <form id={id} ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-3 mt-6">
      <div id={`${id}-name-field`} className="flex flex-col gap-1">
        <label id={`${id}-name-label`} htmlFor={`${id}-name`} className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Name
        </label>
        <input
          id={`${id}-name`}
          name="from_name"
          type="text"
          required
          value={values.from_name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full rounded border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-slate-400 dark:focus:border-slate-500 transition-colors"
        />
      </div>

      <div id={`${id}-email-field`} className="flex flex-col gap-1">
        <label id={`${id}-email-label`} htmlFor={`${id}-email`} className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Email
        </label>
        <input
          id={`${id}-email`}
          name="from_email"
          type="email"
          required
          value={values.from_email}
          onChange={handleChange}
          placeholder="you@example.com"
          className="w-full rounded border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-slate-400 dark:focus:border-slate-500 transition-colors"
        />
      </div>

      <div id={`${id}-message-field`} className="flex flex-col gap-1">
        <label id={`${id}-message-label`} htmlFor={`${id}-message`} className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          rows={4}
          value={values.message}
          onChange={handleChange}
          placeholder="Hi, I'd like to..."
          className="w-full rounded border border-slate-200 dark:border-slate-700 bg-transparent px-3 py-2 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-600 outline-none focus:border-slate-400 dark:focus:border-slate-500 transition-colors resize-none"
        />
      </div>

      <div id={`${id}-footer`} className="flex items-center gap-4 mt-1">
        <button
          id={`${id}-submit`}
          type="submit"
          disabled={status === 'sending'}
          className="text-sm font-medium px-4 py-2 rounded bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-300 disabled:opacity-50 transition-colors"
        >
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>

        {status === 'success' && (
          <span id={`${id}-success`} className="text-xs text-green-600 dark:text-green-400">
            Message sent!
          </span>
        )}
      </div>
      {status === 'error' && <ErrorFallback id={`${id}-error`} />}
    </form>
  );
}
