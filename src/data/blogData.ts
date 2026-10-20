export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  authorImage: string;
  excerpt: string;
  coverImage: string;
  content: {
    heading?: string;
    paragraphs: string[];
    callout?: string;
    bullets?: string[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "10-posture-habits-for-daily-wellness",
    title: "10 Spinal Ergonomics & Posture Habits for Daily Wellness",
    category: "Ergonomics & Posture",
    readTime: "5 min read",
    date: "October 14, 2026",
    author: "Dr. Stephen Lean",
    authorRole: "Practice Owner & Master of Chiropractic",
    authorImage: "/assets/stephen-lean.jpg",
    excerpt: "Modern desk work and long regional commutes place heavy rotational and compressive shear on the cervical and lumbar spine. Here are 10 evidence-backed ergonomic habits to preserve spinal health.",
    coverImage: "/assets/chiro-ergonomics-desk.jpg",
    content: [
      {
        heading: "The Modern Epidemic of Postural Fatigue",
        paragraphs: [
          "Between long commutes along the New England Highway and extended desk hours behind laptop screens, the average Highfields resident sits for upwards of 8.5 hours daily. Over time, prolonged sitting introduces static muscular fatigue, tightens the anterior hip flexors (psoas), and causes forward head posture.",
          "For every inch your head tilts forward beyond neutral alignment, your cervical spine bears an additional 4.5 kilograms of gravitational weight. A 30-degree forward head posture places roughly 18 kilograms of continuous compressive tension on your upper cervical vertebrae and occipital muscles."
        ]
      },
      {
        heading: "10 Daily Habits to Protect Your Spine",
        paragraphs: [
          "Implementing small, cumulative shifts throughout your working day can prevent chronic spinal subluxations and reduce tension headaches before they begin."
        ],
        bullets: [
          "1. Eye-Level Monitor Calibration: Align the top third of your display screen with your direct line of sight so your chin remains parallel to the floor.",
          "2. The 90-90-90 Seating Rule: Ensure your hips, knees, and elbows all rest at 90-degree angles with your feet planted flat on the floor.",
          "3. The 30-Minute Micro-Break: Stand up and change postures every 30 minutes, even if only for 15 seconds to roll the shoulders backwards.",
          "4. Lumbar Lordosis Support: Use a small rolled towel or contoured cushion behind your lower back to maintain natural inward lumbar curvature.",
          "5. Avoid Single-Shoulder Bag Carrying: Distribute weight symmetrically across both shoulders or switch arms periodically.",
          "6. Uncross Your Legs: Sitting cross-legged torques the sacroiliac (SI) joints and causes functional pelvic rotation.",
          "7. Chin Tucks in Traffic: While stopped at traffic lights, gently glide your chin straight backwards like creating a double chin to reactivate deep cervical flexors.",
          "8. Ergonomic Car Seat Recline: Avoid excessively leaned-back bucket seats; position the seatback at 100–110 degrees with adequate lumbar support.",
          "9. Hydrate for Intervertebral Discs: Spinal discs are largely water-bound proteoglycans; staying hydrated keeps your shock-absorbing cushions resilient.",
          "10. Evening Spinal Decompression: Lie flat on a firm rug with your calves elevated on a sofa or chair (90-degree psoas release) for 10 minutes before bed."
        ]
      },
      {
        heading: "When to Seek Professional Chiropractic Assessment",
        paragraphs: [
          "If postural fatigue turns into persistent neck stiffness, numbness in the fingers, or recurring tension headaches across your forehead or behind the eyes, your cervical spine may have developed mechanical joint restrictions that require professional assessment.",
          "At Highfields Chiropractic, our thorough initial consultation evaluates your cervical curve and spinal biomechanics to restore fluid, pain-free movement."
        ],
        callout: "A quick test: Stand with your back against a flat wall. If your shoulder blades and the back of your head cannot touch the wall comfortably without straining your neck upward, you are experiencing significant forward head posture."
      }
    ]
  },
  {
    id: "blog-2",
    slug: "diversified-vs-thompson-drop-table",
    title: "Diversified vs. Thompson Drop Table: Which Adjustment Fits Your Body?",
    category: "Technique Guide",
    readTime: "6 min read",
    date: "October 02, 2026",
    author: "Dr. Shaun Collins",
    authorRole: "Chiropractor & Movement Specialist",
    authorImage: "/assets/shaun-collins.jpg",
    excerpt: "Wondering what happens during a chiropractic adjustment? We compare the manual precision of the Diversified technique against the gentle pneumatic action of the Thompson Drop Table.",
    coverImage: "/assets/technique-diversified.jpg",
    content: [
      {
        heading: "Understanding Modern Chiropractic Modalities",
        paragraphs: [
          "One of the most common questions new patients ask when visiting our Highfields clinic is: 'What will the adjustment feel like?'",
          "There is no single one-size-fits-all chiropractic technique. Our team utilizes eight distinct methodologies, but the two most frequent techniques for spinal realignment are the Diversified Technique and the Thompson Drop Table."
        ]
      },
      {
        heading: "The Diversified Technique: The Gold Standard in Manual Care",
        paragraphs: [
          "Diversified is the traditional manual chiropractic adjustment familiar to most patients. It involves the application of a high-velocity, low-amplitude (HVLA) manual thrust delivered with pinpoint precision to a restricted spinal joint.",
          "Key benefits of Diversified include:",
        ],
        bullets: [
          "Immediate restoration of restricted facet joint range of motion.",
          "Rapid inhibition of surrounding muscle spasm through reflex relaxation.",
          "Audible cavitation ('popping' sound) resulting from harmless nitrogen gas release.",
          "Exceptional efficacy for acute facet syndrome, rib dysfunction, and athletic fixations."
        ]
      },
      {
        heading: "The Thompson Drop Table: Low-Force Pneumatic Precision",
        paragraphs: [
          "For patients who prefer not to hear popping sounds, or for pregnant mothers, seniors, and sensitive spines, the Thompson Drop Table provides an amazingly gentle alternative.",
          "Using a specialized table with pneumatic sectional drop cushions, the chiropractor applies a light, minimal force while the table segment drops roughly half an inch. The physics of inertia does the work, resetting joint alignment with virtually zero twisting."
        ],
        bullets: [
          "Zero rotational twisting or neck cracking required.",
          "Pneumatic drop absorbs peak force, creating an effortless sensation.",
          "Employs the Derefield leg-length protocol to detect subtle sacroiliac imbalance.",
          "Ideal for disc bulges, osteoporosis, pregnancy, and anxious patients."
        ]
      },
      {
        heading: "Which One Is Best for You?",
        paragraphs: [
          "At Highfields Chiropractic, you are always in complete control of your care. Before any adjustment, Dr. Stephen Lean, Dr. Shaun Collins, or Dr. Robert Tosswill will discuss which technique best matches your comfort, bone density, and health goals."
        ],
        callout: "Whether you prefer the crisp relief of manual adjustments or the feather-light drop of our Thompson table, our evidence-based clinicians tailor every visit to you."
      }
    ]
  },
  {
    id: "blog-3",
    slug: "why-nervous-system-alignment-matters",
    title: "Why Nervous System Alignment Matters More Than Just Pain Relief",
    category: "Neurology & Wellness",
    readTime: "4 min read",
    date: "September 24, 2026",
    author: "Dr. Robert Tosswill",
    authorRole: "Senior Sports Chiropractor (34+ yrs Exp)",
    authorImage: "/assets/robert-tosswill.jpg",
    excerpt: "Pain is only the final smoke alarm. Discover how spinal subluxations interfere with autonomic communication between your brain, organs, and musculoskeletal system.",
    coverImage: "/assets/chiro-spine-model.jpg",
    content: [
      {
        heading: "The Spine as the Brain's Highway",
        paragraphs: [
          "Most people view chiropractic solely as a treatment for back pain or stiff necks. While chiropractic is exceptionally effective for musculoskeletal symptoms, the true purpose of spinal alignment is neurological optimization.",
          "Your spinal column protects the spinal cord—the primary master communication highway connecting your brain to every muscle, organ, blood vessel, and nerve ending in your body. When spinal vertebrae become fixated or misaligned (subluxated), abnormal mechanical tension triggers altered afferent feedback into the brainstem and central nervous system."
        ]
      },
      {
        heading: "Sympathetic Overdrive and Chronic Muscle Guarding",
        paragraphs: [
          "When a vertebral joint loses its natural micro-motion, nociceptive (pain and irritation) receptors fire continuous signals into the spinal cord. In response, your nervous system triggers local muscle splinting and elevates sympathetic nervous system activity (your 'fight-or-flight' stress response).",
          "This ongoing subclinical stress can manifest not just as physical pain, but as:",
        ],
        bullets: [
          "Shallow breathing and elevated resting muscular tension.",
          "Poor sleep quality and difficulty entering restorative deep sleep.",
          "Chronic morning stiffness that takes hours to loosen up.",
          "Digestive sluggishness caused by sympathetic dampening of visceral nerves."
        ]
      },
      {
        heading: "Restoring Mechanoreception with Precise Adjustments",
        paragraphs: [
          "A chiropractic adjustment introduces a massive burst of proprioceptive (movement sensing) signals to the cerebellum and sensorimotor cortex. This dampens sympathetic overdrive, stimulates healing parasympathetic tone, and resets dysfunctional motor loops.",
          "This is why so many patients at our Highfields clinic report feeling clearer, sleeping more soundly, and experiencing renewed vitality following regular chiropractic care."
        ],
        callout: "Pain accounts for less than 10% of total nerve fibers in your body. By the time you feel physical pain, underlying spinal dysfunction has often been developing for months."
      }
    ]
  },
  {
    id: "blog-4",
    slug: "5-warning-signs-of-spinal-subluxation",
    title: "5 Warning Signs You Have a Pinched Nerve or Spinal Subluxation",
    category: "Clinical Symptoms",
    readTime: "5 min read",
    date: "September 11, 2026",
    author: "Dr. Stephen Lean",
    authorRole: "Practice Owner & Master of Chiropractic",
    authorImage: "/assets/stephen-lean.jpg",
    excerpt: "Nerve compression rarely starts with screaming pain. Learn to recognise the subtle early warning signs of spinal subluxation and impingement before permanent nerve inflammation occurs.",
    coverImage: "/assets/consultation-home.jpg",
    content: [
      {
        heading: "How Pinched Nerves Actually Behave",
        paragraphs: [
          "A common misconception is that a 'pinched nerve' always feels like an electric shock down your leg or arm. In reality, mechanical nerve compression develops gradually as spinal discs bulge, facet joints inflame, or postural wear narrows the intervertebral foramina (the small bony exits through which spinal nerves travel)."
        ]
      },
      {
        heading: "5 Key Warning Signs to Watch For",
        paragraphs: [
          "If you experience any of the following symptoms, your spine is likely experiencing mechanical nerve irritation that requires diagnostic assessment:"
        ],
        bullets: [
          "1. Pins and Needles or Numbness: Tingling sensations in the fingers, toes, or outer thigh (meralgia paresthetica) indicate sensory nerve fiber compression along the spinal nerve root.",
          "2. Unexplained Muscular Weakness: Dropping your coffee mug, tripping over your toes (foot drop), or feeling your knee 'give way' points to motor nerve root inhibition.",
          "3. Radiating Pain that Travels: Dull, aching, or burning sensations traveling from the buttocks down into the calf (sciatica), or from the shoulder blade down into the forearm.",
          "4. Morning Stiffness Lasting Over 30 Minutes: When spinal joints become restricted, inflammatory fluid pools overnight, creating rigid morning immobility.",
          "5. Uneven Shoe Wear or Tilted Shoulders: Look at the soles of your shoes. If one heel wears down significantly faster than the other, your pelvis and spine are functionally unleveled."
        ]
      },
      {
        heading: "Safe, Evidence-Based Treatment at Highfields Chiropractic",
        paragraphs: [
          "Early intervention is critical. Decompressing the affected spinal segment through gentle chiropractic adjustments, SOT pelvic blocks, or traction takes the mechanical pinch off the nerve root, allowing the nerve sheath to heal naturally without surgery or heavy medication.",
          "Contact our friendly reception team at 07 4615 4585 or book online to schedule an assessment."
        ],
        callout: "If you experience loss of bowel or bladder control, progressive bilateral leg weakness, or numbness in the groin/saddle region, seek emergency medical care immediately as these may indicate cauda equina syndrome."
      }
    ]
  }
];
