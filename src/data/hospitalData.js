const hospitalData = [
  {
    id: "apollo-hospital",
    name: "Apollo Hospital",
    location: "Delhi",
    image: "https://www.apollohospitals.com/images/logo.png",
    description: "Apollo Hospital in Delhi is one of India's premier healthcare institutions, providing comprehensive medical services across various specialties. Known for its advanced technology, skilled doctors, and patient-centered approach, Apollo has been a leader in healthcare since 1983.",
    services: [
      "Cardiology", "Orthopedics", "Neurology", "Gastroenterology", 
      "Oncology", "Emergency Care", "Pediatrics", "Pulmonology", 
      "General Medicine", "Dialysis"
    ],
    rating: 4.5,
    yearEstablished: 1983,
    specialties: [
      "Heart Surgery", "Brain Surgery", "Cancer Treatment", 
      "Bone Marrow Transplant", "Neonatal Intensive Care Unit (NICU)"
    ],
    hospitalStats: {
      totalBeds: 500,
      surgeons: 200,
      annualPatientsTreated: 150000,
      successRate: "95%"
    },
    notableAchievements: "Apollo Hospital was the first to perform a successful liver transplant in India. It is also the first hospital in India to receive ISO 9002 certification.",
    treatmentsOffered: [
      "Heart Surgery", "Liver Transplant", "Kidney Dialysis", 
      "Bone Marrow Transplant", "Spinal Surgery", "Cancer Treatment",
      "Pediatric Intensive Care", "Orthopedic Surgery", "Neuro Surgery"
    ],
    departments: [
      "Cardiology", "Orthopedics", "Neurosurgery", "Oncology", 
      "Pediatrics", "Plastic Surgery", "Gastroenterology", "Pulmonology", 
      "General Surgery", "Emergency Medicine"
    ],
    wards: [
      "ICU", "Pediatrics Ward", "Maternity Ward", "Orthopedic Ward", 
      "Cardiac Ward", "Surgical Ward", "Neonatal Intensive Care Unit"
    ]
  },
  {
    id: "fortis-hospital",
    name: "Fortis Hospital",
    location: "Mumbai",
    image: "https://www.fortishealthcare.com/img/logo-new.png",
    description: "Fortis Hospital, Mumbai, is part of the renowned Fortis Healthcare Group and offers world-class medical services across various specialties. Known for its excellence in cardiac care, urology, and oncology, Fortis has been a trusted name in healthcare since 2001.",
    services: [
      "Cancer Care", "Urology", "Gastroenterology", "Pediatrics", 
      "Cardiology", "Emergency Services", "Neurosurgery", 
      "Obstetrics and Gynecology", "Endocrinology"
    ],
    rating: 4.3,
    yearEstablished: 2001,
    specialties: [
      "Cancer Surgery", "Kidney Transplants", "Liver Transplants", 
      "Cardiac Care", "Neurosurgery"
    ],
    hospitalStats: {
      totalBeds: 300,
      surgeons: 180,
      annualPatientsTreated: 100000,
      successRate: "92%"
    },
    notableAchievements: "Fortis Hospital pioneered robotic surgeries in India and has a state-of-the-art cancer care center offering precision treatments.",
    treatmentsOffered: [
      "Robotic Surgery", "Kidney Transplant", "Liver Transplant", 
      "Pediatric Care", "Oncology Treatment", "Cardiac Surgery",
      "Neuro Surgery", "Dialysis", "Emergency Care"
    ],
    departments: [
      "Cardiology", "Oncology", "Urology", "Neurosurgery", 
      "Plastic Surgery", "Pediatrics", "General Medicine", "Emergency",
      "Endocrinology", "Gastroenterology"
    ],
    wards: [
      "ICU", "Neonatal Ward", "Pediatrics Ward", "Maternity Ward", 
      "Cardiac Care Unit", "Orthopedic Ward", "Surgical Ward", 
      "Oncology Ward"
    ]
  },
  {
    id: "max-hospital",
    name: "Max Super Specialty Hospital",
    location: "New Delhi",
    image: "https://www.maxhealthcare.in/assets/images/max-logo.png",
    description: "Max Super Specialty Hospital in New Delhi is a multi-specialty healthcare provider offering cutting-edge medical treatments. Established in 2000, it is renowned for its services in cardiac surgery, oncology, and neurosurgery. The hospital’s facilities ensure the best care for all patients.",
    services: [
      "Cardiac Surgery", "Neurosurgery", "Transplants", 
      "Orthopedics", "Plastic Surgery", "Emergency Services", 
      "Oncology", "Urology", "Gastroenterology"
    ],
    rating: 4.6,
    yearEstablished: 2000,
    specialties: [
      "Neurosurgery", "Bone Marrow Transplants", 
      "Plastic and Reconstructive Surgery", "Kidney Transplant"
    ],
    hospitalStats: {
      totalBeds: 450,
      surgeons: 250,
      annualPatientsTreated: 120000,
      successRate: "94%"
    },
    notableAchievements: "Max Hospital was one of the first hospitals to offer robotic-assisted surgery in India and is a leader in liver and kidney transplants.",
    treatmentsOffered: [
      "Liver Transplant", "Kidney Transplant", "Robotic Surgery", 
      "Cardiac Surgery", "Neurosurgery", "Bone Marrow Transplant", 
      "Cancer Treatment", "Plastic and Reconstructive Surgery"
    ],
    departments: [
      "Cardiology", "Orthopedics", "Oncology", "Neurosurgery", 
      "Pediatrics", "Plastic Surgery", "Gastroenterology", "Emergency Care"
    ],
    wards: [
      "ICU", "Cardiac Ward", "Pediatrics Ward", "Orthopedic Ward", 
      "Oncology Ward", "Surgical Ward", "Trauma Ward"
    ]
  },
  {
    id: "medanta-hospital",
    name: "Medanta - The Medicity",
    location: "Gurugram",
    image: "https://www.medanta.org/wp-content/themes/medanta/images/medanta-logo.png",
    description: "Medanta - The Medicity in Gurugram is a multi-specialty hospital offering world-class medical services. Established in 2009, it is equipped with advanced medical technology and expert doctors specializing in cardiology, oncology, orthopedics, and neurology.",
    services: [
      "Cardiology", "Cancer Care", "Neurology", "Orthopedics", 
      "Nephrology", "Trauma Care", "Pediatrics", 
      "Cosmetic Surgery", "Endocrinology"
    ],
    rating: 4.7,
    yearEstablished: 2009,
    specialties: [
      "Heart Surgery", "Robotic Surgery", "Neurospine Surgery", 
      "Organ Transplants", "Spinal Cord Surgery"
    ],
    hospitalStats: {
      totalBeds: 1250,
      surgeons: 350,
      annualPatientsTreated: 200000,
      successRate: "96%"
    },
    notableAchievements: "Medanta has the largest cardiac surgery center in India and has pioneered several minimally invasive procedures.",
    treatmentsOffered: [
      "Heart Surgery", "Robotic Surgery", "Cancer Treatment", 
      "Spinal Cord Surgery", "Pediatric Surgery", "Trauma Care", 
      "Orthopedic Surgery", "Organ Transplants"
    ],
    departments: [
      "Cardiology", "Orthopedics", "Neurosurgery", "Oncology", 
      "Pediatrics", "Plastic Surgery", "Gastroenterology", "Pulmonology", 
      "Trauma Care", "Endocrinology"
    ],
    wards: [
      "Cardiac ICU", "Orthopedic Ward", "Oncology Ward", "Trauma Ward", 
      "Pediatrics Ward", "Neonatal ICU", "Surgical Ward"
    ]
  },
  {
    id: "bliss-hospital",
    name: "Bliss Hospital",
    location: "Kolkata",
    image: "https://www.blisshospital.com/logo.png",
    description: "Bliss Hospital, located in Kolkata, is known for its affordable healthcare services in maternity care, general surgery, and pediatrics. Established in 1995, it provides high-quality treatment with a focus on compassion and patient satisfaction.",
    services: [
      "Maternity Care", "General Surgery", "Pediatrics", "Orthopedics", 
      "Emergency Services", "Cardiology", "Nephrology"
    ],
    rating: 4.2,
    yearEstablished: 1995,
    specialties: [
      "Maternity", "Pediatrics", "Orthopedics", 
      "Laparoscopic Surgery", "Neonatal Care"
    ],
    hospitalStats: {
      totalBeds: 250,
      surgeons: 120,
      annualPatientsTreated: 60000,
      successRate: "91%"
    },
    notableAchievements: "Bliss Hospital has one of the best neonatal ICUs in Eastern India, providing top care for newborns.",
    treatmentsOffered: [
      "Maternity Care", "Pediatric Surgery", "Orthopedic Surgeries", 
      "Cancer Care", "General Surgery", "Emergency Care"
    ],
    departments: [
      "Maternity", "Pediatrics", "Orthopedics", "General Surgery", 
      "Emergency Care", "Neonatal Intensive Care", "Plastic Surgery"
    ],
    wards: [
      "Maternity Ward", "Pediatrics Ward", "Neonatal ICU", 
      "Orthopedic Ward", "Surgical Ward"
    ]
  }
];

export default hospitalData;