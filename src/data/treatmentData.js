// src/data/treatmentData.js

const treatmentData = [
  {
    id: 1,
    name: "Heart Bypass Surgery",
    description: "Heart bypass surgery, also known as coronary artery bypass grafting (CABG), is a procedure used to treat coronary artery disease (CAD) by diverting blood flow around a blocked or narrowed coronary artery. This surgery is designed to improve blood flow to the heart muscle, reduce chest pain (angina), and prevent heart attacks in individuals suffering from severe coronary artery blockages.",
    benefits: [
      "Restores normal blood flow to the heart muscle",
      "Improves oxygen supply to the heart, reducing angina symptoms",
      "Significantly reduces the risk of heart attacks and other heart-related complications",
      "Enhances exercise tolerance and overall energy levels",
      "Improves the quality of life and reduces shortness of breath"
    ],
    image: "https://www.muhealth.org/sites/default/files/2019-01/hearthealth-compressor.jpg",
    duration: "3-6 hours",
    cost: "₹3,00,000 - ₹5,00,000",
    hospitals: ["Apollo Hospitals", "Fortis Healthcare", "AIIMS", "Max Healthcare", "Kokilaben Dhirubhai Ambani Hospital"],
    recovery: "Initial recovery takes 2-4 weeks, during which time the patient may need assistance for basic tasks. Full recovery and rehabilitation typically take 3-6 months, with a focus on strengthening the heart through physical therapy. Cardiac rehabilitation programs are critical in speeding up recovery.",
    procedureDetails: "The procedure involves removing healthy blood vessels from another part of the body (often the leg or chest) and attaching them to the coronary arteries to bypass the blockages. It is typically performed under general anesthesia, and the patient will need to stay in the hospital for several days after surgery to monitor vital signs and manage pain.",
    aftercare: [
      "Follow-up visits with the cardiologist to monitor heart health",
      "Physical rehabilitation to strengthen the heart and improve cardiovascular endurance",
      "Medication adherence, including blood thinners, cholesterol-lowering medications, and pain management",
      "Lifestyle changes including a heart-healthy diet, regular exercise, and stress management"
    ],
    risks: [
      "Infection at the surgical site",
      "Bleeding during or after the surgery",
      "Irregular heartbeat (arrhythmia)",
      "Blood clots that could lead to a stroke",
      "Nerve damage or leg wound complications"
    ]
  },
  {
    id: 2,
    name: "Knee Replacement",
    description: "Knee replacement surgery, also called knee arthroplasty, involves replacing a damaged or worn-out knee joint with an artificial joint made of metal and plastic. This procedure is commonly recommended for individuals with severe knee arthritis, particularly when non-surgical treatments like medications or physical therapy have failed to relieve pain and improve mobility.",
    benefits: [
      "Pain relief from severe arthritis or joint damage",
      "Restores knee function and allows individuals to return to normal daily activities",
      "Improves mobility and reduces stiffness, allowing for better range of motion",
      "Enhances overall quality of life by providing relief from chronic pain"
    ],
    image: "https://img.freepik.com/premium-photo/medical-poster-image-bones-knee-joint-knee-arthritis-inflammation-fracture-cartilage-copy-space_99433-7801.jpg?semt=ais_hybrid",
    duration: "1-2 hours",
    cost: "₹2,00,000 - ₹4,00,000",
    hospitals: ["Max Healthcare", "Manipal Hospitals", "Fortis Healthcare", "AIIMS", "Medanta"],
    recovery: "Patients typically spend 2-5 days in the hospital. Full recovery requires 3-6 months, with most patients returning to normal activities within 2-3 months. Physical therapy plays a crucial role in regaining strength, mobility, and knee function post-surgery.",
    procedureDetails: "The surgery involves removing the damaged cartilage and bone from the knee joint and replacing them with metal and plastic components. This can be done through traditional open surgery or minimally invasive techniques. A tourniquet is often used to control bleeding during surgery.",
    aftercare: [
      "Physical therapy to improve strength, flexibility, and mobility in the knee joint",
      "Pain management through prescribed medications and ice packs",
      "Post-surgery check-ups to monitor healing and prevent complications",
      "Activity modifications, such as avoiding high-impact activities during recovery"
    ],
    risks: [
      "Infection at the surgical site or within the joint",
      "Blood clots in the legs (deep vein thrombosis)",
      "Implant failure or dislocation",
      "Stiffness or limited range of motion post-surgery",
      "Persistent pain despite surgery"
    ]
  },
  {
    id: 3,
    name: "High-Risk Pregnancy Care",
    description: "High-risk pregnancy care is specialized medical care designed for women who face health complications that can affect the outcome of pregnancy. It involves closely monitoring the health of both the mother and baby to prevent complications like preterm birth, gestational diabetes, pre-eclampsia, or fetal distress. High-risk pregnancies are carefully managed through frequent check-ups, medical tests, and specific treatments.",
    benefits: [
      "Frequent monitoring to detect complications early and minimize risks to the mother and baby",
      "Personalized treatment plans that account for the mother's health history and lifestyle",
      "Reduced risk of preterm birth, gestational diabetes, and hypertension",
      "Optimal fetal growth and development through close supervision"
    ],
    image: "https://www.ankurahospitals.com/wp-content/uploads/2021/03/gynecology-issues.jpg",
    duration: "Varies depending on the pregnancy's complexity",
    cost: "₹50,000 - ₹2,00,000",
    hospitals: ["AIIMS", "Fortis Healthcare", "Apollo Hospitals", "Max Healthcare", "Kokilaben Dhirubhai Ambani Hospital"],
    recovery: "Recovery depends on the type of delivery (C-section or vaginal) and any complications that arise. Postpartum care includes monitoring for infections, breastfeeding support, and mental health care for both mother and baby.",
    procedureDetails: "High-risk pregnancies often require more frequent visits to an obstetrician, additional tests such as ultrasounds and blood work, and, in some cases, medications or interventions such as bed rest or insulin for gestational diabetes. Cesarean sections may be planned if necessary.",
    aftercare: [
      "Monitoring maternal health, including blood pressure, blood sugar levels, and wound care",
      "Close supervision of the baby, including neonatal care if the baby is born prematurely",
      "Postpartum depression screening and mental health support for the mother",
      "Guidance on breastfeeding, baby care, and managing any special needs"
    ],
    risks: [
      "Gestational diabetes or pre-eclampsia",
      "Preterm labor and premature birth",
      "Placental complications such as placenta previa or placental abruption",
      "Higher likelihood of requiring a C-section",
      "Postpartum hemorrhage or infection"
    ]
  },
  {
    id: 4,
    name: "Skin Allergy Treatment",
    description: "Skin allergy treatment addresses allergic reactions that affect the skin, such as rashes, hives, eczema, or contact dermatitis. These conditions occur when the skin reacts to allergens like pollen, certain foods, or chemicals. Treatment often includes antihistamines, corticosteroid creams, and in some cases, allergy shots for long-term relief.",
    benefits: [
      "Alleviates itching, redness, and swelling caused by allergic reactions",
      "Provides relief from chronic conditions like eczema or urticaria (hives)",
      "Improves the appearance of the skin and reduces the frequency of flare-ups",
      "Prevents complications such as skin infections that may arise from persistent scratching"
    ],
    image: "https://www.rahejahospital.com//assets/images/speciality/6231bbcc3d70c_Dermatology_&_Cosmetology_1.jpg",
    duration: "Varies based on severity of the condition; can be managed long-term",
    cost: "₹1,000 - ₹10,000 (depending on the treatment plan)",
    hospitals: ["Fortis Healthcare", "Max Healthcare", "Kochi's KIMS Hospital", "Manipal Hospitals"],
    recovery: "Most skin allergies resolve within a few days to weeks of starting treatment, though some chronic conditions like eczema require ongoing care and lifestyle adjustments. With proper management, flare-ups can be minimized.",
    procedureDetails: "Treatment may include topical corticosteroids for localized reactions, oral antihistamines for general allergic responses, and specific treatments like immunotherapy (allergy shots) for long-term relief of certain allergies. Patch testing may be done to identify specific allergens.",
    aftercare: [
      "Use of moisturizers to prevent skin dryness",
      "Avoidance of known allergens or triggers",
      "Proper hygiene and gentle skincare routines",
      "Ongoing medication management and follow-up visits for chronic conditions"
    ],
    risks: [
      "Possible side effects from medication such as drowsiness or skin irritation",
      "Skin thinning with prolonged use of corticosteroids",
      "Potential for anaphylaxis in severe allergic reactions (rare)"
    ]
  },
  {
    id: 5,
    name: "Kidney Stone Removal",
    description: "Kidney stone removal includes procedures designed to remove or break up stones in the kidneys or urinary tract. Depending on the size, type, and location of the stones, options like shockwave lithotripsy, ureteroscopy, or percutaneous nephrolithotomy (PCNL) may be recommended to break or extract the stones.",
    benefits: [
      "Relieves intense pain caused by kidney stones",
      "Prevents potential damage to the kidneys or urinary tract from blockages",
      "Restores normal kidney function and urine flow",
      "Reduces the likelihood of stone recurrence with proper management"
    ],
    image: "https://www.stemcellcareindia.com/wp-content/uploads/2016/08/Kidney-disease.jpg",
    duration: "30 minutes to 2 hours depending on the treatment method",
    cost: "₹40,000 - ₹2,00,000",
    hospitals: ["Manipal Hospitals", "Apollo Hospitals", "Max Healthcare", "Fortis Healthcare"],
    recovery: "Recovery time varies. Non-invasive methods like shockwave lithotripsy typically require only a few days of rest, while more invasive methods like PCNL may need 1-2 weeks of recovery. Patients are usually advised to drink plenty of water post-procedure to help flush out any remaining fragments.",
    procedureDetails: "Treatment depends on the size and location of the stones. Lithotripsy uses shock waves to break the stones into smaller pieces. Ureteroscopy involves passing a thin tube through the urinary tract to remove or break up the stones. PCNL is a minimally invasive surgery for large stones requiring a small incision in the back.",
    aftercare: [
      "Drink plenty of fluids to prevent dehydration and aid the passage of small stone fragments",
      "Pain management through prescribed medications",
      "Follow-up appointments to ensure the stones have been completely removed or broken down",
      "Dietary changes to reduce the risk of future stones, such as avoiding high-oxalate foods or reducing salt intake"
    ],
    risks: [
      "Infection or bleeding at the treatment site",
      "Retained stone fragments that may require further treatment",
      "Urinary tract injury",
      "Kidney damage from repeated stone formation or prolonged obstruction"
    ]
  },
  {
    id: 6,
    name: "Child Vaccination",
    description: "Child vaccination is a series of immunizations provided to protect children from a wide range of infectious diseases. Vaccines help prevent potentially serious illnesses, including polio, measles, mumps, rubella, hepatitis, and more. Vaccines are typically administered at specific ages in the form of shots or oral vaccines.",
    benefits: [
      "Prevents childhood diseases that can cause severe health complications",
      "Provides lifelong immunity against certain infections",
      "Reduces the spread of infectious diseases in the community",
      "Ensures the child’s optimal growth and development by preventing illnesses"
    ],
    image: "https://images.ctfassets.net/2ql69mthp94m/2jDmwKqV7HHOX8Qm7l1tJX/a2cb7eb654c2000b980c34017d8b2094/Immunization_schedule_720x480.jpg?fm=webp&q=70",
    duration: "Varies depending on the vaccine schedule (several doses over time)",
    cost: "₹500 - ₹5,000 per vaccine (cost varies based on the vaccine type and hospital)",
    hospitals: ["AIIMS", "Fortis Healthcare", "Apollo Hospitals", "Max Healthcare", "Manipal Hospitals"],
    recovery: "Post-vaccination recovery is generally short, with most side effects (like mild fever or soreness) disappearing within a few days. It's important to monitor the child for any unusual reactions after vaccination.",
    procedureDetails: "Vaccines are typically given in the form of injections, though some, such as the oral polio vaccine, are given by mouth. The vaccine schedule begins soon after birth and continues throughout childhood, with booster doses at certain intervals.",
    aftercare: [
      "Administer pain-relief medication if prescribed by the pediatrician",
      "Provide extra fluids to avoid dehydration in case of mild fever",
      "Monitor for any reactions such as swelling at the injection site or allergic responses"
    ],
    risks: [
      "Mild side effects such as fever, irritability, or redness at the injection site",
      "Rare allergic reactions like rashes or breathing difficulties",
      "Possible temporary discomfort from the injection"
    ]
  },
  {
    id: 7,
    name: "Heart Disease Diagnosis (ECG) & Angioplasty",
    description: "Heart disease diagnosis and treatment often start with an electrocardiogram (ECG) to monitor the electrical activity of the heart and diagnose conditions like arrhythmias, heart attacks, and other abnormalities. Angioplasty is a procedure used to open blocked coronary arteries, usually after a diagnosis of coronary artery disease (CAD), to restore blood flow to the heart muscle.",
    benefits: [
      "Early detection of heart-related issues",
      "Prevents severe complications like heart attack or stroke by restoring proper blood flow",
      "Reduces symptoms such as chest pain and shortness of breath",
      "Improves long-term heart health"
    ],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIN3_2ZNrKWuhiGdZzyl-R-o0QgNT8ujIlrw&s",
    duration: "ECG: 5-10 minutes, Angioplasty: 1-3 hours depending on complexity",
    cost: "₹20,000 - ₹2,50,000 depending on the type of test and procedure",
    hospitals: ["AIIMS", "Fortis Healthcare", "Apollo Hospitals", "Max Healthcare", "Medanta"],
    recovery: "Recovery from an ECG is immediate, as it is a non-invasive test. Recovery from angioplasty typically takes 2-4 days, and the patient is advised to avoid strenuous activities for at least 1-2 weeks post-procedure.",
    procedureDetails: "ECG involves attaching electrodes to the skin to measure heart activity. Angioplasty involves inserting a catheter with a balloon into a blocked coronary artery. The balloon is inflated to open the artery, and sometimes a stent is inserted to keep the artery open.",
    aftercare: [
      "Medications such as blood thinners, statins, and antiplatelets to prevent clots",
      "Follow-up visits to monitor heart function and artery health",
      "Lifestyle changes like a heart-healthy diet, regular exercise, and avoiding smoking"
    ],
    risks: [
      "Bleeding or infection at the catheter insertion site",
      "Artery damage or tear",
      "Recurrent blockage of the artery",
      "Heart attack during or after the procedure"
    ]
  }
];

export default treatmentData;