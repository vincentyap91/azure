import React, { useState } from 'react';
import {
    Banknote,
    CalendarDays,
    Landmark,
    Mail,
    PencilLine,
    Phone,
    UserCircle2,
} from 'lucide-react';
import AccountLayout from './AccountLayout';

const personalFields = [
    { key: 'username', label: 'Username' },
    { key: 'fullName', label: 'Full Name' },
    { key: 'referralCode', label: 'Referral Code' },
    { key: 'referralLink', label: 'Referral Link' },
    { key: 'rank', label: 'Rank' },
    { key: 'birthday', label: 'Birthday', placeholder: 'MM/DD/YYYY' },
    { key: 'gender', label: 'Gender' }
];

const contactFields = [
    { key: 'email', label: 'Email', type: 'email' },
    { key: 'phone', label: 'Phone Number', type: 'tel' }
];

const bankingFields = [
    { key: 'bankName', label: 'Bank Name' },
    { key: 'accountHolder', label: 'Account Holder' },
    { key: 'accountNumber', label: 'Account Number' },
    { key: 'branchName', label: 'Branch Name' }
];

function Field({ label, value, placeholder, type = 'text', editable, onChange, icon: Icon }) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-medium text-[var(--color-text-muted)]">{label}</span>
            <div
                className={`group flex h-12 items-center gap-3 rounded-xl border px-4 shadow-[var(--shadow-subtle)] transition-all focus-within:border-[var(--color-accent-400)] focus-within:ring-2 focus-within:ring-[rgb(96_165_250_/_0.2)] ${
                    editable
                        ? 'border-[var(--color-accent-300)] bg-[var(--color-surface-base)] hover:border-[var(--color-accent-400)]'
                        : 'border-[var(--color-border-default)] bg-[var(--color-surface-muted)] hover:border-[var(--color-accent-200)]'
                }`}
            >
                {Icon && (
                    <Icon
                        size={18}
                        className={`shrink-0 transition-colors ${editable ? 'text-[var(--color-accent-600)]' : 'text-[var(--color-text-soft)] group-hover:text-[var(--color-accent-500)]'}`}
                    />
                )}
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    disabled={!editable}
                    onChange={onChange}
                    className={`w-full bg-transparent text-sm font-medium outline-none ${
                        editable ? 'text-[var(--color-text-strong)]' : 'text-[var(--color-text-muted)]'
                    } placeholder:text-[var(--color-text-soft)] disabled:cursor-not-allowed`}
                />
            </div>
        </label>
    );
}

function SectionCard({ title, description, editing, onToggleEdit, children, actions }) {
    return (
        <section className="surface-card rounded-2xl p-6 transition-all md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-bold tracking-tight text-[var(--color-text-strong)] md:text-xl">{title}</h2>
                    {description && (
                        <p className="mt-1 text-sm font-medium text-[var(--color-text-muted)]">{description}</p>
                    )}
                </div>

                <div className="flex items-center gap-3">
                    {actions}
                    <button
                        type="button"
                        onClick={onToggleEdit}
                        aria-pressed={editing}
                        className="btn-theme-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
                    >
                        <PencilLine size={16} />
                        {editing ? 'Save' : 'Edit'}
                    </button>
                </div>
            </div>

            <div className="mt-6">{children}</div>
        </section>
    );
}

export default function ProfilePage({ authUser, onLogout, onNavigate, onLiveChatClick }) {
    const [editing, setEditing] = useState({
        personal: false,
        contact: false,
        banking: false
    });
    const [showBankForm, setShowBankForm] = useState(false);
    const [formValues, setFormValues] = useState({
        username: authUser?.name || 'vincentzo',
        fullName: 'Vincent Yap',
        referralCode: 'Zy4REBcM',
        referralLink: 'https://riocity.com/register?code=Zy4REBcM',
        rank: 'Iron',
        birthday: '08/01/2026',
        gender: 'Male',
        email: 'vincentzo@gmail.com',
        phone: '60 123456701',
        bankName: 'Maybank',
        accountHolder: 'Vincent Yap',
        accountNumber: '1122 3344 5566',
        branchName: 'Kuala Lumpur Main Branch'
    });

    const toggleEdit = (sectionKey) => {
        setEditing((current) => ({
            ...current,
            [sectionKey]: !current[sectionKey]
        }));
    };

    const updateField = (field) => (event) => {
        const value = event.target.value;
        setFormValues((current) => ({
            ...current,
            [field]: value
        }));
    };

    return (
        <AccountLayout activePage="profile" authUser={authUser} onNavigate={onNavigate} onLogout={onLogout} onLiveChatClick={onLiveChatClick}>
            <div className="page-container">
                <h1 className="page-title">Account Details</h1>

                <div className="mt-8 space-y-6">
                    <div className="surface-card flex flex-col gap-5 rounded-2xl p-6 md:flex-row md:items-center md:p-8">
                        <div className="relative shrink-0">
                            <div className="blue-accent-avatar flex h-20 w-20 items-center justify-center rounded-full md:h-24 md:w-24">
                                <UserCircle2 size={48} className="text-[var(--color-accent-600)]" />
                            </div>
                            <button
                                type="button"
                                className="absolute bottom-0 right-0 inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-accent-100)] bg-[var(--color-surface-base)] text-[var(--color-accent-600)] shadow-sm transition hover:scale-105 hover:bg-[var(--color-accent-50)]"
                                aria-label="Edit profile image"
                            >
                                <PencilLine size={14} />
                            </button>
                        </div>

                        <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold uppercase tracking-widest text-[var(--color-accent-600)]">
                                Verified Account Profile
                            </p>
                            <h2 className="mt-2 truncate text-2xl font-bold tracking-tight text-[var(--color-text-strong)] md:text-3xl">
                                {formValues.username}
                            </h2>
                            <p className="mt-2 text-sm font-medium text-[var(--color-text-muted)]">{formValues.email}</p>
                            <div className="mt-4 flex flex-wrap items-center gap-2">
                                <span className="inline-flex rounded-full border border-[var(--color-accent-100)] bg-[var(--color-accent-50)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-accent-700)]">
                                    Joined 08/01/2026
                                </span>
                                <span className="inline-flex rounded-full border border-[var(--color-border-default)] bg-[var(--color-surface-muted)] px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-[var(--color-text-muted)]">
                                    Player ID 679129
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <SectionCard
                            title="Personal Info"
                            description="Core account identity and referral information."
                            editing={editing.personal}
                            onToggleEdit={() => toggleEdit('personal')}
                        >
                            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                                {personalFields.map(({ key, label, placeholder }) => (
                                    <Field
                                        key={key}
                                        label={label}
                                        value={formValues[key]}
                                        placeholder={placeholder}
                                        editable={editing.personal}
                                        onChange={updateField(key)}
                                        icon={key === 'birthday' ? CalendarDays : undefined}
                                    />
                                ))}
                            </div>
                        </SectionCard>

                        <SectionCard
                            title="Contact Info"
                            description="Keep your recovery and communication details up to date."
                            editing={editing.contact}
                            onToggleEdit={() => toggleEdit('contact')}
                        >
                            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                                {contactFields.map(({ key, label, type }) => (
                                    <Field
                                        key={key}
                                        label={label}
                                        type={type}
                                        value={formValues[key]}
                                        editable={editing.contact}
                                        onChange={updateField(key)}
                                        icon={key === 'email' ? Mail : Phone}
                                    />
                                ))}
                            </div>
                        </SectionCard>

                        <SectionCard
                            title="Banking Details"
                            description="Manage payout-ready banking information in a secure format."
                            editing={editing.banking}
                            onToggleEdit={() => {
                                if (!showBankForm) {
                                    setShowBankForm(true);
                                }
                                toggleEdit('banking');
                            }}
                            actions={
                                !showBankForm ? (
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowBankForm(true);
                                            setEditing((current) => ({
                                                ...current,
                                                banking: true
                                            }));
                                        }}
                                        className="btn-theme-primary inline-flex min-h-[44px] items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
                                    >
                                        <Banknote size={16} />
                                        Add Bank Account
                                    </button>
                                ) : null
                            }
                        >
                            {showBankForm ? (
                                <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
                                    {bankingFields.map(({ key, label }) => (
                                        <Field
                                            key={key}
                                            label={label}
                                            value={formValues[key]}
                                            editable={editing.banking}
                                            onChange={updateField(key)}
                                            icon={Landmark}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="flex min-h-[240px] flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--color-accent-200)] bg-[var(--color-accent-50)] px-6 text-center">
                                    <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-surface-base)] text-[var(--color-accent-600)] shadow-[var(--shadow-accent-avatar)]">
                                        <Landmark size={28} />
                                    </div>
                                    <p className="mt-5 text-lg font-bold text-[var(--color-text-strong)]">No bank account added</p>
                                    <p className="mt-2 max-w-[420px] text-sm font-medium leading-6 text-[var(--color-text-muted)]">
                                        Add your bank profile to enable secure withdrawals and faster account verification.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setShowBankForm(true);
                                            setEditing((current) => ({
                                                ...current,
                                                banking: true
                                            }));
                                        }}
                                        className="btn-theme-primary mt-6 inline-flex min-h-[44px] items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-sm transition-all hover:scale-[1.02] hover:shadow-md"
                                    >
                                        <Banknote size={16} />
                                        + Add Bank Account
                                    </button>
                                </div>
                            )}
                        </SectionCard>
                    </div>
                </div>
            </div>
        </AccountLayout>
    );
}
