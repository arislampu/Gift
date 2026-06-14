/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Step } from './types';
import { IntroScreen } from './components/IntroScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { SuccessScreen } from './components/SuccessScreen';
import { BirthdayScreen } from './components/BirthdayScreen';

export default function App() {
  const [step, setStep] = useState<Step>('intro');

  return (
    <div className="min-h-[100dvh] bg-brand-bg text-brand-text font-sans overflow-hidden">
      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <IntroScreen key="intro" onNext={() => setStep('question')} />
        )}
        {step === 'question' && (
          <QuestionScreen key="question" onYes={() => setStep('success')} />
        )}
        {step === 'success' && (
          <SuccessScreen key="success" onNext={() => setStep('birthday')} />
        )}
        {step === 'birthday' && (
          <BirthdayScreen key="birthday" />
        )}
      </AnimatePresence>
    </div>
  );
}
