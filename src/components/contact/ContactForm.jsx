import React, { useState } from 'react';
import { Terminal, Send, Check, AlertCircle, ChevronDown, BadgeCheck } from 'lucide-react';
import SuccessModal from './SuccessModal';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'concept_art',
    scale: 'tier_2',
    message: '',
    nda: true,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [packetHash, setPacketHash] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = '請輸入發訊者姓名或代表機構';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = '請填入合規的電子通訊信箱格式';
    }
    if (formData.message.trim().length < 10) {
      errs.message = '訊息酬載不可為空，請輸入至少 10 字元';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      // Generate randomized packet hash
      const randHex = Math.random().toString(16).substring(2, 6).toUpperCase();
      setPacketHash(`#TX-${randHex}-NODE2088`);
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: 'concept_art',
      scale: 'tier_2',
      message: '',
      nda: true,
    });
    setErrors({});
    setIsSuccess(false);
  };

  return (
    <div className="bg-surface-container-low/90 backdrop-blur-xl p-6 sm:p-8 rounded-xl shadow-2xl relative border border-outline-variant/30 font-mono">
      {/* Top Bar Telemetry */}
      <div className="flex items-center justify-between pb-4 mb-6 bg-surface-container-lowest/60 px-4 py-2.5 rounded border border-surface-container-high">
        <div className="flex items-center gap-2">
          <Terminal className="w-4 h-4 text-primary-container" />
          <span className="text-xs text-primary font-bold tracking-wider">
            NEURAL UPLINK TRANSMITTER
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary-container rounded-full animate-ping" />
          <span className="text-[10px] text-on-surface-variant">LIVE PROTOCOL: V4.8.1</span>
        </div>
      </div>

      {/* The Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
        {/* Row 1: Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Operator Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-primary flex items-center gap-1.5 font-bold" htmlFor="contact-name">
              <span>OPERATOR NAME // 姓名 *</span>
            </label>
            <div className="relative">
              <input
                id="contact-name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Kenji Arasaka / Project Director"
                className={`w-full bg-surface-container-lowest text-on-surface font-body text-sm px-4 py-2.5 rounded outline-none placeholder:text-outline-variant focus:bg-surface-container-high transition-all border ${
                  errors.name ? 'border-error ring-1 ring-error' : 'border-outline-variant/30 focus:border-primary-container'
                }`}
              />
              <span className="absolute right-3 top-2.5 text-[10px] text-outline-variant pointer-events-none">
                &lt;ID&gt;
              </span>
            </div>
            {errors.name && (
              <span className="text-xs text-error flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-primary flex items-center gap-1.5 font-bold" htmlFor="contact-email">
              <span>RELAY ADDRESS // 電子郵件 *</span>
            </label>
            <div className="relative">
              <input
                id="contact-email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="contact@corp-domain.net"
                className={`w-full bg-surface-container-lowest text-on-surface font-body text-sm px-4 py-2.5 rounded outline-none placeholder:text-outline-variant focus:bg-surface-container-high transition-all border ${
                  errors.email ? 'border-error ring-1 ring-error' : 'border-outline-variant/30 focus:border-primary-container'
                }`}
              />
              <span className="absolute right-3 top-2.5 text-[10px] text-outline-variant pointer-events-none">
                @DNS
              </span>
            </div>
            {errors.email && (
              <span className="text-xs text-error flex items-center gap-1 mt-0.5">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.email}</span>
              </span>
            )}
          </div>
        </div>

        {/* Row 2: Subject & Budget */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Subject Dropdown */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-primary flex items-center gap-1.5 font-bold" htmlFor="contact-subject">
              <span>TRANSMISSION INTENT // 聯絡主旨 *</span>
            </label>
            <div className="relative">
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-surface-container-lowest text-on-surface font-body text-sm px-4 py-2.5 rounded outline-none focus:bg-surface-container-high transition-all appearance-none cursor-pointer border border-outline-variant/30 focus:border-primary-container"
              >
                <option value="commercial">商業合作提案 (Commercial Collaboration)</option>
                <option value="concept_art">角色概念設計委託 (Character Concept Art)</option>
                <option value="environment_art">環境與關鍵格插畫 (Keyframe & Environment)</option>
                <option value="license">既有插畫商業授權 (Artwork IP Licensing)</option>
                <option value="talk">演講講座 / 媒體採訪 (Speaking / Workshop)</option>
                <option value="other">其他特遣事項 (Other Transmission)</option>
              </select>
              <ChevronDown className="w-4 h-4 text-outline absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>

          {/* Budget Bracket */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-primary flex items-center gap-1.5 font-bold" htmlFor="contact-scale">
              <span>BUDGET BRACKET // 預算規模 (USD)</span>
            </label>
            <div className="relative">
              <select
                id="contact-scale"
                name="scale"
                value={formData.scale}
                onChange={handleChange}
                className="w-full bg-surface-container-lowest text-on-surface font-body text-sm px-4 py-2.5 rounded outline-none focus:bg-surface-container-high transition-all appearance-none cursor-pointer border border-outline-variant/30 focus:border-primary-container"
              >
                <option value="tier_1">&lt; $1,000 USD (Single Illustration / Sketch)</option>
                <option value="tier_2">$1,000 - $3,000 USD (Detailed Keyframe / IP Promo)</option>
                <option value="tier_3">$3,000 - $8,000 USD (Full Concept Pack / Character Set)</option>
                <option value="tier_4">&gt; $8,000 USD (Enterprise Project / Visual Lead)</option>
                <option value="tbd">待評估協議 (To Be Discussed)</option>
              </select>
              <ChevronDown className="w-4 h-4 text-outline absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <label className="text-xs text-primary flex items-center gap-1.5 font-bold" htmlFor="contact-message">
              <span>PAYLOAD MESSAGE // 訊息內容與專案詳情 *</span>
            </label>
            <span className={`text-[10px] ${formData.message.length > 1000 ? 'text-secondary font-bold' : 'text-outline'}`}>
              {formData.message.length} / 1200 CHARS
            </span>
          </div>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            maxLength={1200}
            value={formData.message}
            onChange={handleChange}
            placeholder="> 請描述您的專案背景、預計交付時程（Deadline）、風格參考或需要的美術數量清單..."
            className={`w-full bg-surface-container-lowest text-on-surface font-body text-sm px-4 py-3 rounded outline-none placeholder:text-outline-variant focus:bg-surface-container-high transition-all resize-y border ${
              errors.message ? 'border-error ring-1 ring-error' : 'border-outline-variant/30 focus:border-primary-container'
            }`}
          />
          {errors.message && (
            <span className="text-xs text-error flex items-center gap-1 mt-0.5">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.message}</span>
            </span>
          )}
        </div>

        {/* NDA Agreement Checkbox */}
        <div className="flex items-center gap-2.5 pt-1">
          <label className="relative flex items-center cursor-pointer select-none">
            <input
              type="checkbox"
              id="nda-agreement"
              name="nda"
              checked={formData.nda}
              onChange={handleChange}
              className="peer sr-only"
            />
            <div className="w-4 h-4 bg-surface-container-lowest peer-checked:bg-primary-container rounded-xs flex items-center justify-center transition-colors border border-outline-variant/40">
              {formData.nda && <Check className="w-3 h-3 text-on-primary font-bold" />}
            </div>
          </label>
          <label htmlFor="nda-agreement" className="font-body text-xs text-on-surface-variant cursor-pointer select-none">
            本發送通道默認啟動保密協議 (NDA Protected Link)。保證提案資料不外流。
          </label>
        </div>

        {/* Action Button & Status */}
        <div className="mt-3 flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-surface-container-high">
          <div className="flex items-center gap-2 text-xs text-outline">
            <span className="w-2 h-2 rounded-full bg-secondary" />
            <span>STATUS: {isSubmitting ? 'UPLOADING PACKET...' : 'BUFFER IDLE'}</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="hud-bracket w-full sm:w-auto px-8 py-3 bg-primary-container hover:bg-primary-fixed text-on-primary text-xs font-bold rounded shadow-[0_0_16px_rgba(0,245,255,0.4)] hover:shadow-[0_0_24px_rgba(0,245,255,0.7)] flex items-center justify-center gap-2 transition-all transform active:scale-95 cursor-pointer disabled:opacity-50"
          >
            <Send className="w-4 h-4" />
            <span>{isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT MESSAGE // 送出訊號 ⚡'}</span>
          </button>
        </div>
      </form>

      {/* Success Modal Overlay */}
      <SuccessModal
        isOpen={isSuccess}
        packetHash={packetHash}
        onReset={handleReset}
      />
    </div>
  );
}
