'use client';

import React, { useState } from 'react';
import styles from './contact.module.css';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    service: '',
    voltage: '',
    location: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
    }, 1200);
  };

  if (status === 'sent') {
    return (
      <div className={styles.success}>
        <div className={styles.successIcon}>⚡</div>
        <h3 className={styles.successTitle}>Inquiry Successfully Received!</h3>
        <p className={styles.successDesc}>
          Thank you, <strong>{form.name || 'Valued Partner'}</strong>. Your commercial / technical inquiry regarding <em>{form.service || 'Transmission EPC Services'}</em> has been logged. Our engineering and project management team will review your specifications and respond to <strong>{form.email}</strong> within 24 to 48 business hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus('idle');
            setForm({
              name: '',
              organization: '',
              email: '',
              phone: '',
              service: '',
              voltage: '',
              location: '',
              message: '',
            });
          }}
          className={styles.resetBtn}
        >
          Submit Another Inquiry ←
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      {/* Name and Organization */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-name" className={styles.label}>
            Full Name <span className={styles.req}>*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            required
            placeholder="e.g. Rajesh Sharma"
            className={styles.input}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-org" className={styles.label}>
            Organization / Utility / Company <span className={styles.req}>*</span>
          </label>
          <input
            id="contact-org"
            type="text"
            required
            placeholder="e.g. RRVPNL / Tata Power / NHAI"
            className={styles.input}
            value={form.organization}
            onChange={(e) => setForm({ ...form, organization: e.target.value })}
          />
        </div>
      </div>

      {/* Email and Phone */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-email" className={styles.label}>
            Official Email <span className={styles.req}>*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            required
            placeholder="name@company.com"
            className={styles.input}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-phone" className={styles.label}>
            Mobile / Phone Number <span className={styles.req}>*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            placeholder="+91 98XXX XXXXX"
            className={styles.input}
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
      </div>

      {/* Service Scope and Voltage */}
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="contact-service" className={styles.label}>
            Required Scope of Work <span className={styles.req}>*</span>
          </label>
          <select
            id="contact-service"
            required
            className={styles.input}
            value={form.service}
            onChange={(e) => setForm({ ...form, service: e.target.value })}
          >
            <option value="">Select Technical Scope</option>
            <option value="EHT & HT Transmission Lines (33kV - 400kV)">EHT & HT Transmission Lines (33kV – 400kV)</option>
            <option value="Grid Substations & Switchyards (132kV - 765kV)">Grid Substations & Switchyards (132kV – 765kV)</option>
            <option value="Solar Evacuation & Grid Connectivity">Solar Evacuation & Grid Connectivity (132kV/220kV)</option>
            <option value="Line Shifting & Height Raising (NHAI / Rail)">Line Shifting & Height Raising (NHAI / Railways)</option>
            <option value="LILO Tapping & Conductor Uprating">LILO Tapping & Conductor Uprating</option>
            <option value="Comprehensive O&M & Thermography AMC">Comprehensive O&M & Thermography AMC</option>
            <option value="Statutory Approvals & DGPS Survey">Statutory Clearances & DGPS Surveying</option>
            <option value="General Turnkey EPC Proposal">General Turnkey EPC Proposal</option>
          </select>
        </div>
        <div className={styles.field}>
          <label htmlFor="contact-voltage" className={styles.label}>
            Operating Voltage Level
          </label>
          <select
            id="contact-voltage"
            className={styles.input}
            value={form.voltage}
            onChange={(e) => setForm({ ...form, voltage: e.target.value })}
          >
            <option value="">Select Voltage Level</option>
            <option value="765kV UHV">765kV UHV</option>
            <option value="400kV EHT">400kV EHT</option>
            <option value="220kV EHT">220kV EHT</option>
            <option value="132kV HT">132kV HT</option>
            <option value="33kV / 11kV Distribution">33kV / 11kV Distribution</option>
            <option value="Multi-Voltage / Network">Multi-Voltage / Hybrid Grid</option>
          </select>
        </div>
      </div>

      {/* Project District / Location */}
      <div className={styles.field}>
        <label htmlFor="contact-loc" className={styles.label}>
          Project Location / District & State <span className={styles.req}>*</span>
        </label>
        <select
          id="contact-loc"
          required
          className={styles.input}
          value={form.location}
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        >
          <option value="">Select Project Location / District & State</option>
          
          <optgroup label="Rajasthan — Major Transmission & Renewable Energy Corridors">
            <option value="Jaipur, Rajasthan">Jaipur, Rajasthan</option>
            <option value="Jaisalmer, Rajasthan (Solar Power Corridor)">Jaisalmer, Rajasthan (Solar Power Corridor)</option>
            <option value="Bikaner, Rajasthan (Solar Evacuation Grid)">Bikaner, Rajasthan (Solar Evacuation Grid)</option>
            <option value="Jodhpur, Rajasthan (Bhadla / REZ Hub)">Jodhpur, Rajasthan (Bhadla / REZ Hub)</option>
            <option value="Barmer, Rajasthan">Barmer, Rajasthan</option>
            <option value="Chittorgarh, Rajasthan">Chittorgarh, Rajasthan</option>
            <option value="Bhilwara, Rajasthan">Bhilwara, Rajasthan</option>
            <option value="Ajmer / Kishangarh, Rajasthan">Ajmer / Kishangarh, Rajasthan</option>
            <option value="Udaipur / Rajsamand, Rajasthan">Udaipur / Rajsamand, Rajasthan</option>
            <option value="Kota / Baran / Jhalawar, Rajasthan">Kota / Baran / Jhalawar, Rajasthan</option>
            <option value="Alwar / Bhiwadi / NCR, Rajasthan">Alwar / Bhiwadi / NCR, Rajasthan</option>
            <option value="Nagaur / Didwana, Rajasthan">Nagaur / Didwana, Rajasthan</option>
            <option value="Sikar / Jhunjhunu, Rajasthan">Sikar / Jhunjhunu, Rajasthan</option>
            <option value="Pali / Sirohi / Jalore, Rajasthan">Pali / Sirohi / Jalore, Rajasthan</option>
            <option value="Hanumangarh / Sri Ganganagar, Rajasthan">Hanumangarh / Sri Ganganagar, Rajasthan</option>
            <option value="Bharatpur / Dholpur / Karauli, Rajasthan">Bharatpur / Dholpur / Karauli, Rajasthan</option>
            <option value="Other District, Rajasthan">Other District, Rajasthan</option>
          </optgroup>

          <optgroup label="Other Key States — Western & Northern India">
            <option value="Gujarat (Kutch / Ahmedabad / Surat / Rajkot / Banaskantha)">Gujarat (Kutch / Ahmedabad / Surat / Rajkot / Banaskantha)</option>
            <option value="Madhya Pradesh (Indore / Bhopal / Gwalior / Rewa / Ujjain)">Madhya Pradesh (Indore / Bhopal / Gwalior / Rewa / Ujjain)</option>
            <option value="Maharashtra (Mumbai / Pune / Nagpur / Solapur / Nashik)">Maharashtra (Mumbai / Pune / Nagpur / Solapur / Nashik)</option>
            <option value="Haryana / Delhi NCR">Haryana / Delhi NCR</option>
            <option value="Uttar Pradesh (Noida / Lucknow / Varanasi / Agra / Kanpur)">Uttar Pradesh (Noida / Lucknow / Varanasi / Agra / Kanpur)</option>
            <option value="Punjab / Himachal Pradesh / Uttarakhand">Punjab / Himachal Pradesh / Uttarakhand</option>
            <option value="Andhra Pradesh / Telangana / Karnataka / Tamil Nadu">Andhra Pradesh / Telangana / Karnataka / Tamil Nadu</option>
            <option value="Other State / Pan-India Project">Other State / Pan-India Project</option>
          </optgroup>
        </select>
      </div>

      {/* Project Description */}
      <div className={styles.field}>
        <label htmlFor="contact-message" className={styles.label}>
          Project Scope, Route Length & Tender Details <span className={styles.req}>*</span>
        </label>
        <textarea
          id="contact-message"
          required
          rows={5}
          placeholder="Please share line route length (km), conductor type (e.g. ACSR Moose/Zebra), tower types, target commissioning timeline, or tender reference details..."
          className={styles.textarea}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </div>

      <div className={styles.formFooter}>
        <button
          type="submit"
          className={styles.submitBtn}
          id="contact-submit"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Submitting Proposal Request…' : 'Submit Commercial / Technical Inquiry →'}
        </button>
        <span className={styles.privacyNote}>
          🔒 Your technical data & drawings remain strictly confidential.
        </span>
      </div>
    </form>
  );
}
