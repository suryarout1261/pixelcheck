export type Language =
  | "en"
  | "es"
  | "fr"
  | "zh"
  | "ja"
  | "it"
  | "de"
  | "pt";

export interface LanguageOption {
  code: Language;
  name: string;
  nativeName: string;
  flag: string;
  shortLabel: string;
}

export interface Translations {
  nav: {
    deadPixelTest: string;
    stuckPixelTest: string;
    screenUniformity: string;
    gradientTest: string;
    displayScore: string;
    howItWorks: string;
    startTest: string;
    launchTester: string;
    deviceDiagnostics: string;
    iphone: string;
    android: string;
    mac: string;
    windows: string;
    theme: string;
    instant: string;
  };
  hero: {
    privacyPill: string;
    termsPill: string;
    contactPill: string;
    aboutPill: string;
    titleStart: string;
    titleHighlight: string;
    subtitle: string;
    description: string;
    startTestCta: string;
    howItWorksCta: string;
    swatchesTitle: string;
    swatchesHint: string;
    colors: {
      white: string;
      red: string;
      green: string;
      blue: string;
      black: string;
      yellow: string;
      cyan: string;
      magenta: string;
    };
    features: {
      pureColors: string;
      fullscreenApi: string;
      autoCycle: string;
      magnifierGrid: string;
    };
  };
  deviceSelector: {
    title: string;
    subtitle: string;
    viewGuide: string;
    testNow: string;
    devices: {
      iphone: {
        title: string;
        tag: string;
        desc: string;
      };
      android: {
        title: string;
        tag: string;
        desc: string;
      };
      mac: {
        title: string;
        tag: string;
        desc: string;
      };
      windows: {
        title: string;
        tag: string;
        desc: string;
      };
    };
    tvCallout: {
      title: string;
      desc: string;
      button: string;
    };
  };
  testTypes: {
    badge: string;
    title: string;
    subtitle: string;
    learnMore: string;
    startTest: string;
    tests: {
      deadPixel: {
        title: string;
        desc: string;
        badge: string;
      };
      stuckPixel: {
        title: string;
        desc: string;
        badge: string;
      };
      color: {
        title: string;
        desc: string;
        badge: string;
      };
      uniformity: {
        title: string;
        desc: string;
        badge: string;
      };
      gradient: {
        title: string;
        desc: string;
        badge: string;
      };
      fullscreen: {
        title: string;
        desc: string;
        badge: string;
      };
    };
  };
  displayPrep: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      step1: { title: string; desc: string };
      step2: { title: string; desc: string };
      step3: { title: string; desc: string };
      step4: { title: string; desc: string };
      step5: { title: string; desc: string };
      step6: { title: string; desc: string };
    };
    proTip: {
      label: string;
      text: string;
    };
  };
  deadVsStuck: {
    badge: string;
    title: string;
    subtitle: string;
    tabDead: string;
    tabStuck: string;
    tabDust: string;
    dead: {
      tag: string;
      title: string;
      desc: string;
      simLabel: string;
      dotLabel: string;
      visibility: string;
      fixability: string;
      action: string;
    };
    stuck: {
      tag: string;
      title: string;
      desc: string;
      simLabel: string;
      dotLabel: string;
      visibility: string;
      fixability: string;
      action: string;
    };
    dust: {
      tag: string;
      title: string;
      desc: string;
      simLabel: string;
      dotLabel: string;
      shape: string;
      test: string;
      action: string;
    };
  };
  displayInspector: {
    badge: string;
    title: string;
    subtitle: string;
    cardTitle: string;
    cardSubtitle: string;
    refresh: string;
    viewport: string;
    viewportDesc: string;
    dpr: string;
    orientation: string;
    orientationDesc: string;
    colorDepth: string;
    colorDepthDesc: string;
    ctaHint: string;
    ctaButton: string;
  };
  supportedDisplays: {
    badge: string;
    title: string;
    subtitle: string;
    recommended: string;
    panels: Array<{
      title: string;
      tech: string;
      desc: string;
      idealTests: string[];
    }>;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  finalCta: {
    badge: string;
    title: string;
    subtitle: string;
    startButton: string;
    secondaryButton: string;
    noAccount: string;
    free: string;
    allDevices: string;
  };
  footer: {
    value1Title: string;
    value1Desc: string;
    value2Title: string;
    value2Desc: string;
    value3Title: string;
    value3Desc: string;
    brandDesc: string;
    domain: string;
    standard: string;
    diagnosticTools: string;
    deviceTesting: string;
    information: string;
    aboutUs: string;
    howItWorks: string;
    contactUs: string;
    terms: string;
    privacy: string;
    disclaimer: string;
    allRightsReserved: string;
    guide: string;
  };
  tester: {
    hudHintClick: string;
    hudHintKeys: string;
    step: string;
    of: string;
    autoPlay: string;
    off: string;
    magnifier: string;
    grid: string;
    invert: string;
    info: string;
    fullscreen: string;
    exitFullscreen: string;
    finishTest: string;
    prev: string;
    next: string;
    completeTitle: string;
    completeSubtitle: string;
    generateReport: string;
    restartTest: string;
    backHome: string;
    noDefects: string;
    foundDefects: string;
    infoTitle: string;
    infoClose: string;
    zoomLevel: string;
  };
  report: {
    badge: string;
    title: string;
    subtitle: string;
    scoreOutOf: string;
    gradeAplus: string;
    gradeA: string;
    gradeB: string;
    gradeC: string;
    gradeD: string;
    gradeAplusLabel: string;
    gradeALabel: string;
    gradeBLabel: string;
    gradeCLabel: string;
    gradeDLabel: string;
    isoPassed: string;
    isoStandard: string;
    isoTolerable: string;
    isoWarranty: string;
    isoAction: string;
    launchTest: string;
    copyReport: string;
    copied: string;
    findingsTitle: string;
    findingsSubtitle: string;
    deadPixelsTitle: string;
    stuckPixelsTitle: string;
    uniformityTitle: string;
    gradientsTitle: string;
    colorBalanceTitle: string;
    none: string;
    oneDead: string;
    multipleDead: string;
    oneStuck: string;
    multipleStuck: string;
    uniform: string;
    minorGlow: string;
    bleed: string;
    smooth: string;
    minorBanding: string;
    severeBanding: string;
    balanced: string;
    minorTint: string;
    uneven: string;
    hardwareBoxTitle: string;
    viewport: string;
    dprScaling: string;
    orientation: string;
    colorDepth: string;
    restartDiagnostic: string;
  };
  landingTemplate: {
    home: string;
    launch: string;
    instructions: string;
    previewTitle: string;
    previewSubtitle: string;
    stepsCount: string;
    whyTestTitle: string;
    whatToLookFor: string;
    prepTipsTitle: string;
    faqTitle: string;
    relatedTestsTitle: string;
  };
}
