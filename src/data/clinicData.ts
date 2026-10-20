export interface Doctor {
  id: string;
  slug: string;
  name: string;
  title: string;
  role: string;
  image: string;
  degrees: string[];
  experience: string;
  bio: string[];
  specialties: string[];
  philosophy: string;
  consultationDays: string;
}

export interface ServiceTechnique {
  id: string;
  number: string;
  slug: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  features: string[];
  indications: string[];
  whatToExpect: string;
  evidence: string;
  doctorInCharge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  rating: number;
  quote: string;
  fullReview: string;
  condition: string;
  avatar?: string;
}

export interface SponsoredClub {
  id: string;
  name: string;
  role: string;
  logo: string;
  description: string;
  sport: string;
}

export const CLINIC_INFO = {
  name: "Highfields Chiropractic",
  tagline: "Elevate Your Wellness in Highfields",
  motto: "“Our Family Caring For Your Family.”",
  established: "Over 10 Years in Highfields",
  phone: "07 4615 4585",
  phoneClean: "0746154585",
  email: "info@highfieldschiropractic.com.au",
  address: "43 Kratzke Rd, Highfields QLD 4352, Australia",
  mapQuery: "43+Kratzke+Rd,+Highfields+QLD+4352,+Australia",
  logo: "/assets/highfields-logo.png",
  hours: [
    { day: "Monday", time: "8:00 AM – 6:00 PM" },
    { day: "Tuesday", time: "8:00 AM – 6:00 PM" },
    { day: "Wednesday", time: "8:00 AM – 6:00 PM" },
    { day: "Thursday", time: "8:00 AM – 7:00 PM (Late Night)" },
    { day: "Friday", time: "8:00 AM – 6:00 PM" },
    { day: "Saturday", time: "By Appointment Only" },
    { day: "Sunday", time: "Closed" },
  ],
  insurance: [
    "Private Health Insurance (HICAPS on-the-spot electronic claiming)",
    "Medicare Chronic Disease Management (CDM) / EPC Care Plans",
    "Department of Veterans' Affairs (DVA) Approved Referrals",
    "WorkCover Queensland & Third Party Motor Vehicle Claims",
  ],
  stats: [
    { value: "10+", label: "Years Serving Highfields" },
    { value: "3,500+", label: "Local Families Treated" },
    { value: "8+", label: "Specialised Chiropractic Techniques" },
    { value: "100%", label: "Patient-Centred Evidence Care" },
  ],
};

export const SPONSORED_TEAMS: SponsoredClub[] = [
  {
    id: "hfc",
    name: "Highfields Football Club",
    role: "Official Club Partner & Spinal Sponsor",
    logo: "/assets/sponsors/sponsor_1.png",
    description: "Supporting youth and senior soccer across Highfields with proactive musculoskeletal screening, acute injury triage, and pitch-side recovery.",
    sport: "Football / Soccer"
  },
  {
    id: "hsc",
    name: "Highfields Swimming Club",
    role: "Youth Aquatic Health Partner",
    logo: "/assets/sponsors/sponsor_2.png",
    description: "Helping young swimmers optimize thoracic mobility, streamline shoulder mechanics, and prevent repetitive rotator cuff strain in the pool.",
    sport: "Competitive Swimming"
  },
  {
    id: "hdjrl",
    name: "Highfields & District Junior Rugby League",
    role: "Junior Athletic Sponsor",
    logo: "/assets/sponsors/sponsor_3.png",
    description: "Providing concussion protocol support, cervical spine checks, and contact sports conditioning for junior rugby league players.",
    sport: "Junior Rugby League"
  },
  {
    id: "hdna",
    name: "Highfields & Districts Netball Association",
    role: "Community Netball Sponsor",
    logo: "/assets/sponsors/sponsor_4.png",
    description: "Partnering with local netballers to correct ankle/knee biomechanics, pelvic stability, and jumping load management.",
    sport: "Netball"
  },
  {
    id: "bulldogs",
    name: "Highfields & Districts Railway Bulldogs Cricket Club",
    role: "Senior & Junior Cricket Sponsor",
    logo: "/assets/sponsors/sponsor_5.png",
    description: "Keeping bowlers and batsmen on the field by treating rotational lumbar fatigue, hamstring strains, and shoulder impingement.",
    sport: "Cricket"
  },
  {
    id: "trlra",
    name: "Toowoomba Rugby League Referees Association",
    role: "Official Official & Referee Health Partner",
    logo: "/assets/sponsors/sponsor_6.png",
    description: "Ensuring match officials stay match-fit and agile throughout the rugby league season across the Darling Downs region.",
    sport: "Match Officials / Referees"
  },
  {
    id: "simmental",
    name: "Simmental Australia “Beefing Up the Next Generation”",
    role: "Rural Agricultural Youth Camp Sponsor",
    logo: "/assets/sponsors/sponsor_7.png",
    description: "Proudly supporting regional agricultural education and young cattle producers across Queensland, reflecting Dr. Stephen Lean’s deep local rural farming heritage.",
    sport: "Rural Youth Agriculture"
  }
];

export const DOCTORS: Doctor[] = [
  {
    id: "stephen-lean",
    slug: "dr-stephen-lean",
    name: "Dr. Stephen Lean",
    title: "Chiropractor & Practice Owner",
    role: "Clinical Director",
    image: "/assets/stephen-lean.jpg",
    degrees: [
      "Master of Chiropractic (Macquarie University)",
      "Bachelor of Science - Anatomy (University of Queensland)",
      "Member of Australian Chiropractors Association (ACA)",
    ],
    experience: "17+ Years Clinical Experience",
    bio: [
      "Stephen Lean is the founding practice owner of Highfields Chiropractic, bringing over 17 years of dedicated clinical practice to the Darling Downs community.",
      "A true country person at heart, Stephen is a Highfields local whose family has actively lived and contributed to the Highfields and Toowoomba community for over 25 years. In his spare time, Stephen manages his cattle property just outside Highfields.",
      "Stephen cares for patients of all ages, from infants and school students to tradespeople, desk professionals, and active seniors. He holds a special clinical interest in acute and chronic spinal pain, headache management, and sports injury recovery.",
      "Stephen's career objective is to empower every patient to make positive, lasting health choices in their day-to-day lives through precise chiropractic adjustments and functional movement restoration."
    ],
    specialties: [
      "Acute & Chronic Spinal Pain",
      "Diversified Joint Mobilisation",
      "Sports Injury Rehabilitation",
      "Headache & Migraine Management",
      "Ergonomic & Postural Correction"
    ],
    philosophy: "Healthcare should never be transactional. We treat the whole human being, not just a symptom on a chart.",
    consultationDays: "Mon, Tue, Wed, Thu, Fri"
  },
  {
    id: "shaun-collins",
    slug: "dr-shaun-collins",
    name: "Dr. Shaun Collins",
    title: "Chiropractor & Movement Specialist",
    role: "Senior Associate Chiropractor",
    image: "/assets/shaun-collins.jpg",
    degrees: [
      "Bachelor of Chiropractic Science",
      "Certified Strength & Conditioning Specialist",
      "Dry Needling & Syntropy Adjusting Certified",
      "Functional Health & Movement Mentorship",
    ],
    experience: "10+ Years in Highfields Community",
    bio: [
      "Dr. Shaun Collins has a decade-long history in the Highfields fitness and health ecosystem, originally establishing himself as the owner of CrossFit Highfields before pursuing his degree in Chiropractic.",
      "Shaun brings an extensive background in exercise physiology, strength & conditioning, and athletic rehab into every clinical adjustment. His passion for helping patients unlock optimal mobility leads him to constantly expand his skills with courses in Dry Needling, Syntropy adjusting techniques, and functional biomechanics.",
      "Shaun employs a multimodal approach tailored to the individual: gentle chiropractic adjustments, mobilisations, soft tissue techniques, dry needling, lifestyle education, and active exercise advice.",
      "Whether you are recovering from a sports injury, dealing with desk posture strain, or wanting to move without pain, Shaun provides honest, active rehabilitation strategies."
    ],
    specialties: [
      "Functional Biomechanics & Athletic Rehab",
      "Trigger Point Dry Needling",
      "Syntropy Dynamic Adjusting",
      "Soft Tissue Active Release",
      "Strength & Mobility Conditioning"
    ],
    philosophy: "Movement is medicine. When the spine moves cleanly and the muscular system fires correctly, pain disappears.",
    consultationDays: "Mon, Wed, Thu, Fri"
  },
  {
    id: "robert-tosswill",
    slug: "dr-robert-tosswill",
    name: "Dr. Robert Tosswill",
    title: "Senior Sports Chiropractor",
    role: "Clinical Consultant",
    image: "/assets/robert-tosswill.jpg",
    degrees: [
      "Master of Chiropractic (Macquarie University, 1990)",
      "Bachelor of Science - Anatomy & Physiology (UNSW)",
      "Postgraduate Qualification in Sports Chiropractic (1994)",
      "Chiropractic Australia Fellow",
    ],
    experience: "34+ Years Clinical Practice",
    bio: [
      "Dr. Robert Tosswill is one of Australia's most experienced sports and family chiropractors, graduating in 1990 from Macquarie University and completing postgraduate qualifications in Sports Chiropractic in 1994.",
      "Having successfully directed and practiced in his own clinics for over 32 years before relocating to Toowoomba and joining Highfields Chiropractic in 2023, Rob brings an extraordinary depth of clinical acumen to the team.",
      "Throughout his career, Rob has treated athletes at every tier—from local club sports to players at elite professional levels. Yet he equally relishes caring for families, grandparents, and people from all walks of life.",
      "Rob's approach is firmly grounded in evidence-based musculoskeletal care, patient empathy, and deep diagnostic clarity."
    ],
    specialties: [
      "Complex Spinal & Extremity Biomechanics",
      "Geriatric & Gentle Low-Force Care",
      "Postgraduate Sports Injury Protocols",
      "Whiplash & Occupational Strain",
      "Long-Term Structural Maintenance"
    ],
    philosophy: "Decades of practice teach you one thing: listen to the patient first. The body always gives clues if you have the patience to evaluate thoroughly.",
    consultationDays: "Tue, Thu, Fri"
  },
  {
    id: "melian-goddard",
    slug: "melian-goddard",
    name: "Melian Goddard",
    title: "Chiropractic Assistant & Allied Health Coordinator",
    role: "Practice Coordinator",
    image: "/assets/melian-goddard.jpg",
    degrees: [
      "Allied Health Assistance Certification",
      "Licensed Dance Instructor",
    ],
    experience: "Highfields Community Local",
    bio: [
      "Melian is one of our friendly Chiropractic Assistants and the welcoming voice greeting patients at reception.",
      "A proud Highfields local, Melian holds extensive allied health knowledge and brings a warm, conversational demeanor that puts patients at total ease the moment they walk through our clinic doors.",
      "Away from the clinic, Melian enjoys being a Dance Teacher and values time spent with her husband and two children."
    ],
    specialties: [
      "Patient Intake & HICAPS Processing",
      "Warm Supportive Care Environment",
      "Allied Health Liaison"
    ],
    philosophy: "A healing experience begins the second you walk through the clinic front door.",
    consultationDays: "Mon – Fri"
  },
  {
    id: "melitta-lebsanft",
    slug: "melitta-lebsanft",
    name: "Melitta Lebsanft",
    title: "Chiropractic Assistant & Clinic Operations",
    role: "Operations Coordinator",
    image: "/assets/melitta-lebsanft.jpg",
    degrees: [
      "20+ Years Healthcare & Insurance Industry Administration",
    ],
    experience: "11 Years Highfields Resident",
    bio: [
      "Melitta grew up in Toowoomba and relocated to Highfields 11 years ago. Bringing over two decades of experience in the insurance sector, Melitta decided to make a career change and brings her organizational skills and dedication to our clinic.",
      "She ensures seamless appointment scheduling, Medicare CDM/EPC care plan documentation, and DVA coordination.",
      "Outside of work, Melitta enjoys walking through Highfields bushland and spending quality time with family and friends."
    ],
    specialties: [
      "Medicare CDM & EPC Care Plan Coordination",
      "DVA & Third-Party Claims",
      "Patient Scheduling & Care Continuity"
    ],
    philosophy: "Organised, compassionate clinic administration takes the stress away so patients can focus solely on recovery.",
    consultationDays: "Mon – Fri"
  }
];

export const SERVICES: ServiceTechnique[] = [
  {
    id: "diversified-technique",
    number: "01",
    slug: "diversified-technique",
    title: "Diversified Technique",
    category: "Manual Joint Mobilisation",
    shortDesc: "The global benchmark in manual chiropractic care: high-velocity, low-amplitude adjustments to restore full joint mechanics.",
    fullDesc: "The Diversified Technique is the most widely practiced and scientifically researched chiropractic method in the world. It involves targeted, high-velocity, low-amplitude manual thrusts applied to restricted spinal segments and peripheral joints. By restoring physiological motion, it relieves pressure on exiting spinal nerves, reduces muscular hypertonicity, and stimulates mechanoreceptors for fast pain relief.",
    image: "/assets/technique-diversified.jpg",
    features: [
      "High-velocity, low-amplitude targeted thrust",
      "Instant restoration of restricted range of motion",
      "Reduces nerve irritation and mechanical facet pinching",
      "Customised patient positioning for maximum comfort"
    ],
    indications: [
      "Acute lumbar facet syndrome & sciatica",
      "Thoracic stiffness & rib cage restriction",
      "Cervical facet joint pain & tension headaches",
      "Restricted spinal flexibility from sedentary desk work"
    ],
    whatToExpect: "You will rest comfortably on an ergonomic adjusting table. The chiropractor identifies specific vertebral restrictions via palpation and gently positions the segment before delivering a swift, comfortable adjustment. You may hear a harmless 'pop' or cavitation, which is simply nitrogen gas releasing from the synovial joint capsule.",
    evidence: "Extensive peer-reviewed trials demonstrate that manual spinal manipulation provides statistically significant improvements in pain and disability scores for acute and chronic low back pain compared to sham treatments or general medication.",
    doctorInCharge: "Dr. Stephen Lean & Dr. Robert Tosswill"
  },
  {
    id: "thompson-drop-table",
    number: "02",
    slug: "thompson-drop-table",
    title: "Thompson Drop Table",
    category: "Pneumatic Low-Force Care",
    shortDesc: "Gentle, low-force precision adjusting using segmentally dropped table cushions for effortless joint restoration.",
    fullDesc: "The Thompson Technique utilizes a specialized pneumatic adjusting table equipped with segmented drop pieces across the cervical, dorsal, lumbar, and pelvic regions. As the chiropractor applies a gentle, minimal manual force, the pneumatic section drops a fraction of an inch, using the momentum of the drop to adjust the joint without requiring twisting or cracking.",
    image: "/assets/techniques-home.jpg",
    features: [
      "Pneumatic sectional drops eliminate heavy manual force",
      "Zero rotational twisting required",
      "Leg-length inequality diagnostic protocol (Derefield)",
      "Ideal for sensitive, elderly, or pregnant patients"
    ],
    indications: [
      "Sacroiliac joint dysfunction & pelvic unleveling",
      "Low back pain during pregnancy",
      "Patients who dislike manual 'cracking' sounds",
      "Osteopenia, osteoporosis, or post-surgical stiffness"
    ],
    whatToExpect: "Patients lie face down. The table cushions are cocked slightly upward. With gentle hand placement, the chiropractor delivers a light impulse as the table cushion drops with a crisp click. Patients report an immediate sensation of pelvic and lumbar relief with zero discomfort.",
    evidence: "Biomechanical force-time profiling shows drop-table mechanisms deliver optimal impulse velocity while reducing peak manual force transfer to the patient by over 40%.",
    doctorInCharge: "Dr. Stephen Lean & Dr. Shaun Collins"
  },
  {
    id: "sacro-occipital-technique",
    number: "03",
    slug: "sacro-occipital-technique",
    title: "Sacro Occipital Technique (SOT) & Cranial Therapy",
    category: "Neurological & Pelvic Balancing",
    shortDesc: "Non-force pelvic block positioning and cranial dura mobilization to balance the relationship between pelvis and skull.",
    fullDesc: "Sacro Occipital Technique (SOT) is an indicator-based, gentle chiropractic protocol that addresses the functional neurological relationship between the sacrum (base of spine) and the occiput (base of skull). By placing specialized triangular foam blocks under the pelvis while you lie relaxed, gravity and your own breathing gently realign pelvic torsion and normalize cerebrospinal fluid pulsation throughout the central nervous system.",
    image: "/assets/consultation-about.jpg",
    features: [
      "Triangular wedge pelvic blocking utilizes gravity & respiration",
      "Gentle cranial sutures and dura mobilization",
      "Three distinct clinical categories for tailored treatment",
      "Extremely gentle with profound calming effect on sympathetic nerves"
    ],
    indications: [
      "Chronic recurrent pelvic rotation & hip pain",
      "Cranial tension, jaw clenching, and TMJ discomfort",
      "Persistent neck stiffness resistant to standard adjustments",
      "Pediatric and postpartum pelvic recovery"
    ],
    whatToExpect: "You remain fully clothed and lie comfortably on your back or stomach. Triangular blocks are gently slid under specific landmarks of your pelvis. You simply breathe calmly for several minutes while the pelvis realigns itself without any manual thrusting.",
    evidence: "SOT clinical studies document measurable improvements in weight-bearing distribution, postural symmetry, and reduction in autonomic stress markers following block decompression.",
    doctorInCharge: "Dr. Stephen Lean"
  },
  {
    id: "sports-rehabilitation",
    number: "04",
    slug: "sports-rehabilitation",
    title: "Sports Rehabilitation & Dry Needling",
    category: "Active Recovery & Soft Tissue",
    shortDesc: "Integrating trigger point dry needling, active myofascial release, PNF stretching, and biomechanical rehab.",
    fullDesc: "Our Sports Injury & Rehabilitation service bridges the gap between passive joint adjustments and active athletic performance. Led by Dr. Shaun Collins (former CrossFit Highfields owner and strength coach) and Dr. Robert Tosswill (Master Sports Chiropractor), we combine trigger point dry needling, myofascial release, and progressive functional loading to fix chronic movement compensation patterns.",
    image: "/assets/rehabilitation.jpg",
    features: [
      "Targeted trigger point dry needling for muscular spasm",
      "Active Release Technique (ART) & PNF neuromuscular stretching",
      "Kinesiology & functional joint strapping",
      "Personalized gym & home movement prescriptions"
    ],
    indications: [
      "Rotator cuff impingement & tennis/golfer's elbow",
      "Hamstring, groin, and calf strains",
      "Runner's knee, ITB friction syndrome & plantar fasciitis",
      "Post-acute athletic collision trauma & sprains"
    ],
    whatToExpect: "Following a functional movement screen, fine filament acupuncture-style needles are inserted into stubborn trigger points to reset muscle tone. This is coupled with targeted active release and a clear 3-exercise corrective drill program you can practice at home.",
    evidence: "Systematic reviews confirm dry needling provides immediate significant reduction in myofascial trigger point pain and increases range of motion when paired with active exercise rehabilitation.",
    doctorInCharge: "Dr. Shaun Collins"
  },
  {
    id: "applied-kinesiology",
    number: "05",
    slug: "applied-kinesiology",
    title: "Applied Kinesiology (AK)",
    category: "Functional Muscle Testing",
    shortDesc: "Assessing subtle neurological imbalances and muscular inhibition through manual muscle testing protocols.",
    fullDesc: "Applied Kinesiology is a diagnostic system that evaluates structural, chemical, and mental aspects of health using manual muscle testing. By evaluating the responsiveness of individual muscles, our chiropractors identify whether a joint restriction or functional weakness is compromising your muscular stability.",
    image: "/assets/chiro-posture-assess.jpg",
    features: [
      "Precision manual muscle testing",
      "Identifies inhibited vs overactive muscle synergies",
      "Holistic biomechanical diagnosis",
      "Non-invasive and immediate feedback loop"
    ],
    indications: [
      "Unexplained muscle weakness or recurring athletic sprains",
      "Core instability not responding to traditional exercises",
      "Functional postural fatigue",
      "Complex gait imbalances"
    ],
    whatToExpect: "You will be asked to hold your limb in a specific position against gentle manual resistance while the practitioner tests the nervous system's ability to lock the muscle smoothly.",
    evidence: "Applied muscle testing provides instant functional biofeedback on neuromuscular coordination and postural reflexes.",
    doctorInCharge: "Dr. Stephen Lean"
  },
  {
    id: "retained-neonatal-reflexes",
    number: "06",
    slug: "retained-neonatal-reflexes",
    title: "Retained Neonatal Reflexes & Pediatric Care",
    category: "Neuro-Developmental Therapy",
    shortDesc: "Gentle hands-on integration of primitive infant reflexes to improve brain-body coordination and posture.",
    fullDesc: "Primitive neonatal reflexes (such as the Moro, ATNR, and Spinal Galant) are automatic survival movements present at birth that should naturally integrate within the first year of life. When these reflexes remain retained, children and adults may experience postural instability, sensory sensitivities, coordination difficulties, or chronic spinal muscular guarding.",
    image: "/assets/consultation-home.jpg",
    features: [
      "Comprehensive neonatal reflex screening",
      "Ultra-gentle tactile neurological stimulation",
      "Simple home exercises for parent-child practice",
      "Calm, welcoming, child-friendly clinic atmosphere"
    ],
    indications: [
      "Children struggling with coordination, balance, or posture",
      "Restless sitting posture / fidgeting at school desks",
      "Retained Moro or asymmetric tonic neck reflexes",
      "Gentle spinal checkups following difficult births"
    ],
    whatToExpect: "A playful, relaxed assessment checking primitive reflex responses. Corrections involve light cranial and spinal touch and fun cross-crawl movements.",
    evidence: "Neuro-developmental research shows primitive reflex integration therapy significantly enhances bilateral motor coordination and visual-motor integration in growing children.",
    doctorInCharge: "Dr. Stephen Lean"
  },
  {
    id: "activator-methods",
    number: "07",
    slug: "activator-methods",
    title: "Activator Instrument Adjusting",
    category: "Instrument-Assisted Precision",
    shortDesc: "High-speed, gentle mechanical impulse adjusting using a precision spring-loaded handheld instrument.",
    fullDesc: "The Activator Method utilizes a handheld, spring-loaded diagnostic instrument designed to deliver a controlled, high-speed, low-force impulse to specific spinal vertebrae. Because the instrument delivers its thrust within milliseconds, the surrounding musculature does not have time to tense or resist, allowing for effective joint mobilization with minimal force.",
    image: "/assets/chiro-adjust-spine.jpg",
    features: [
      "Consistent, measured force delivery",
      "Extremely fast impulse prevents patient muscle tensing",
      "No cracking, twisting, or popping sounds",
      "Exceptional for delicate joints (cervical, ribs, jaw, wrists)"
    ],
    indications: [
      "Patients with osteoporosis, acute arthritis, or spinal stiffness",
      "Small children and infant spinal checks",
      "TMJ jaw joint discomfort and cranial alignment",
      "Patients preferring non-manual, gentle care"
    ],
    whatToExpect: "The practitioner places the small rubber-tipped device against the restricted spinal joint. With a gentle click, a light tap is felt on the skin.",
    evidence: "Randomized comparative trials demonstrate clinical outcomes using Activator instruments are comparable in efficacy to manual diversified adjustments for spine-related pain.",
    doctorInCharge: "Dr. Stephen Lean & Dr. Robert Tosswill"
  },
  {
    id: "cranial-therapy",
    number: "08",
    slug: "cranial-therapy",
    title: "Cranial Therapy & TMJ Care",
    category: "Gentle Skull Mobilisation",
    shortDesc: "Relieving micro-compression in the cranial bones to ease headaches, sinus congestion, and jaw tension.",
    fullDesc: "Cranial therapy is a delicate, hands-on treatment that addresses the subtle mobility of the 22 cranial bones and the underlying dural membranes. Tension in the jaw (temporomandibular joint - TMJ), clenching, facial trauma, or birth compression can cause micro-torsions that trigger chronic migraines, sinus pressure, and upper cervical stiffness.",
    image: "/assets/chiro-spine-model.jpg",
    features: [
      "Feather-light fingertip pressure (<5 grams of force)",
      "Releases dural membrane tension along the spinal axis",
      "Direct relief for TMJ click and jaw clenching",
      "Deeply relaxing, promotes parasympathetic nervous state"
    ],
    indications: [
      "Chronic tension headaches and vestibular dizziness",
      "TMJ jaw clicking, grinding (bruxism), and clenching",
      "Sinus pressure and cranial tightness",
      "Post-concussion syndrome and mental fatigue"
    ],
    whatToExpect: "You lie supine with your head resting comfortably in the practitioner's hands. The chiropractor applies gentle, static fingertip holds to specific sutures of the skull and jaw.",
    evidence: "Anatomical studies confirm cranial sutures possess viscoelastic patency throughout life, and gentle decompression enhances intracranial fluid dynamics.",
    doctorInCharge: "Dr. Stephen Lean"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "Lachlan Davies",
    role: "Local Farming Contractor, Highfields",
    rating: 5,
    quote: "Stephen and the team at Highfields Chiropractic got me back in the tractor when I could barely walk after harvesting season.",
    fullReview: "I've been going to Stephen for 7 years now. As someone who works on cattle properties and heavy machinery, lower back spasms used to put me out for weeks. Stephen's diversified adjustments and Shaun's dry needling sorted out my sciatic pain within three visits. You won't find a more honest, genuine clinic on the Downs.",
    condition: "Lumbar Disc Bulge & Sciatica"
  },
  {
    id: "test-2",
    name: "Sarah Henderson",
    role: "Mother of 3 & Teacher, Toowoomba",
    rating: 5,
    quote: "The Thompson drop table technique was a complete game changer during my third pregnancy.",
    fullReview: "I had debilitating pelvic girdle pain and was terrified of manual cracking. Stephen used the gentle drop table and SOT blocks. There was zero twisting or discomfort, and my pelvis felt instantly leveled. The clinic is so welcoming for kids, and Melian at the front desk is an absolute angel.",
    condition: "Pregnancy Pelvic Girdle Pain"
  },
  {
    id: "test-3",
    name: "Marcus Thorne",
    role: "Amateur Triathlete & CrossFitter",
    rating: 5,
    quote: "Shaun Collins understands athletic mechanics better than any practitioner I've seen in Queensland.",
    fullReview: "After tweaking my shoulder on a heavy lift, I thought I'd need months of rest. Shaun did a thorough biomechanical screen, hit the rotator cuff with dry needling, and adjusted my upper thoracic spine. Two weeks later I hit a personal best pain-free. If you train hard, you need this team in your corner.",
    condition: "Shoulder Impingement & Thoracic Fixation"
  },
  {
    id: "test-4",
    name: "Eileen McCormack",
    role: "Retired Registered Nurse, 72 yrs",
    rating: 5,
    quote: "Dr. Robert Tosswill's gentle activator methods have given me my mobility and morning walks back.",
    fullReview: "Having worked as a nurse for 40 years, my spine had taken quite a beating. Because of my bone density, I cannot have aggressive manual adjustments. Dr. Tosswill used the low-force activator and cranial therapy. My neck stiffness and morning headaches vanished. The care here is truly first class.",
    condition: "Cervicogenic Headaches & Osteoarthritis"
  }
];

export const CLINIC_PROCESS = [
  {
    number: "01",
    title: "Schedule Your Consultation",
    short: "Quick online booking or friendly phone triage with our reception team.",
    desc: "Don't wait in pain. Whether you are seeking immediate relief from an acute spasm, looking for headache support, or organizing a routine family spinal checkup, our friendly team at Highfields Chiropractic will find an appointment that fits your work and family schedule."
  },
  {
    number: "02",
    title: "Comprehensive Biomechanical Assessment",
    short: "Thorough orthopaedic, neurological, and postural evaluation.",
    desc: "Your initial visit includes an in-depth clinical consultation. We perform range of motion tests, palpate spinal segments, evaluate neural tension, examine posture, and review any previous X-rays or MRI scans to identify the root cause of dysfunction."
  },
  {
    number: "03",
    title: "Tailored Evidence-Based Adjustment Plan",
    short: "Gentle, technique-matched care tailored to your comfort and health goals.",
    desc: "No two spines are the same. We match you with the exact technique best suited to your comfort: traditional Diversified manual adjustments, pneumatic Thompson Drop Table, gentle SOT blocks, or low-force Activator instruments."
  },
  {
    number: "04",
    title: "Active Recovery & Long-Term Optimization",
    short: "Empowering you with ergonomic advice, stretching, and movement freedom.",
    desc: "We don't believe in endless passive treatments. We equip you with practical ergonomic corrections, rehabilitative exercises, and proactive wellness strategies so you stay active, pain-free, and doing what you love in the Highfields community."
  }
];
