'use client';

import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';
import { SUBSCRIPTION_TIERS, SubscriptionTier } from '@/lib/stripe';

interface PricingCardProps {
  tier: SubscriptionTier;
  currentTier: SubscriptionTier;
  onUpgrade: (tier: SubscriptionTier) => void;
  loading?: boolean;
}

export default function PricingCard({ tier, currentTier, onUpgrade, loading }: PricingCardProps) {
  const tierConfig = SUBSCRIPTION_TIERS[tier];
  const isCurrentTier = tier === currentTier;
  const isUpgrade = tier !== 'FREE' && currentTier === 'FREE';
  const isDowngrade = tier === 'FREE' && currentTier !== 'FREE';

  const getButtonText = () => {
    if (isCurrentTier) return 'Current Plan';
    if (isUpgrade) return `Upgrade to ${tierConfig.name}`;
    if (isDowngrade) return 'Downgrade to Free';
    return `Switch to ${tierConfig.name}`;
  };

  const getButtonStyle = () => {
    if (isCurrentTier) return 'bg-gray-100 text-gray-500 cursor-not-allowed';
    if (tier === 'PRO') return 'bg-blue-600 hover:bg-blue-700 text-white';
    if (tier === 'MAX') return 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white';
    return 'bg-gray-600 hover:bg-gray-700 text-white';
  };

  return (
    <div className={`relative rounded-lg border-2 p-6 ${
      tier === 'PRO' ? 'border-blue-500 shadow-lg' : 
      tier === 'MAX' ? 'border-purple-500 shadow-lg' : 
      'border-gray-200'
    }`}>
      {tier === 'PRO' && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900">{tierConfig.name}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">${tierConfig.price}</span>
          <span className="text-gray-500">/month</span>
        </div>
      </div>

      <ul className="mt-6 space-y-3">
        {tierConfig.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={() => onUpgrade(tier)}
        disabled={isCurrentTier || loading}
        className={`mt-8 w-full py-3 px-4 rounded-md font-medium transition-colors ${getButtonStyle()}`}
      >
        {loading ? 'Processing...' : getButtonText()}
      </button>
    </div>
  );
}