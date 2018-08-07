const domInjector = (type, target, html,  className, listener=null) => {
    let targetElement = document.querySelector(target)
    let element = document.createElement(type)
    element.className = className
    element.innerHTML = html
    element.addEventListener("click", listener);
    targetElement.appendChild(element)
}

const domUpdater = (elementToErase, updateContentArray) => {
    updateContentArray.forEach((updateContent) => {
      domInjector.apply(this, updateContent)
    })
  }

const textEng = {
    introHead: "Welcome to the Transparent Psi Project!",
    introBody: "Press the button below to take you to the informed consent.",
    introText: "Please fill out  the present screen before continuing to the participant’s screen.",
    introExpCode: "Experimenter’s code",
    introLabCode: "Laboratory’s code",
    introError: "Experimenter’s code or Laboratory’s code invalid",
    nextButton: "Continue",
    consent1: "In this study, it is important not to have missing data. This means that you should only start the experiment if you are sure that you will be able to complete all experimental trials without taking a break. There are 36 trials in total which take about 10 minutes to complete. Please turn off your phone, take care of all needs, and make sure you are prepared to complete the experiment before continuing.",
    consent2:"If you need to take care of something before continuing that would require you to leave your seat, please notify the experimenter. For the same reason, we would like to make sure that you are comfortable with the type of stimuli we use before you agree to participate in the study. As stated in the informed consent, you may see explicitly erotic and pornographic images during the experiment.",
    consent3:"We would like to show you a sample image to make sure you are comfortable with this. In order for us to be able to show images that are pleasant for you, we will need to know your gender and your sexual orientation. Please, indicate your age, gender and sexual orientation below. (Your sexual orientation is not recorded, and no one (not even the experimenter or the principal investigator of the study) will be able to get information on your answer to this question, or the pictures you were shown.)",
    age: "What age range are you in?",
    sex: "Sex",
    requiredField: "Please select one of the options below in each question",
    sexChoices: ["Male", "Female"],
    orientation: "Sexual orientation",
    orientationChoices: ["Gay/Lesbian", "Heterosexual", "Bisexual – prefer same-sex erotic images", "Bisexual – prefer opposite-sex erotic images", "Prefer not to answer"],
    formContinue: "Press continue to indicate that you are ready to see the sample image",
    afterForm: "Are you comfortable with continuing the experiment after knowing the types of images that may be displayed? The experiment may contain similar images. If you have doubts about whether or not you will be comfortable with completing the experiment you should refuse participation. By pressing the agree to continue button you will start the experiment. Please note that the experiment needs to be completed individually. Interaction with other participants is not allowed during the experiment.",
    continueAfterTestImage: "Agree to continue",
    refuseButton: "Refuse participation",
    rewardNeeded: "Display Reward Reclaim Code: ",
    rewardInfo: "This is your reward reclaim code. Please, note the code below (for example, write it down to a piece of paper). You can use this code to reclaim the reward for study participation.",
    ESPIntro: "Please answer the following questions. Extrasensory Perception (ESP) is the reception of information without the use of the known senses. It includes:",
    ESPIntro1: "Telepathy: ESP of the thoughts of another person.",
    ESPIntro2: "Clairvoyance: ESP of hidden object or distant events. (Also called Remote Viewing.)",
    ESPIntro3: "Precognition: ESP of future events",
    rewardContinue: "Press continue when you have noted the code.",
    ESP_Q_item_1: "Do you believe that ESP Exists?",
    ESP_Q_item_1Choices: ["", "Definitely Does not", "Probably does not", "Don’t know", "Probably does", "Definitely does"],
    ESP_Q_item_2: "Have you had any experiences that you believe were genuine ESP?",
    ESP_Q_item_2Choices: ["","Definitely no", "Probably no", "Don't know", "Probably yes", "Definitely yes"],
    ESP_Q_item_3: "Have you ever practiced any form of meditation, self-hypnosis, relaxation exercises, or biofeedback?",
    ESP_Q_item_3Choices: ["", "No, never", "Only a few times", "Occasionally", "Regurarly in the past", "Regurarly no"],
    SS_Q_item_Header: "For each of the following statements, please indicate how true it is for you.",
    SS_Q_item_1: "I often enjoy seeing movies I’ve seen before.",
    SS_Q2A_item_1Choices: ["", "very untrue", "untrue", "between true and untrue", "true","very true"],
    SS_Q_item_2: "In general, I am easily bored.",
    SS_Q2A_item_2Choices: ["", "very untrue", "untrue", "between true and untrue", "true","very true"],
    relaxation_screen: "For the next 3 minutes, we would like you to relax, watch the screen, and try to clear your mind of all other thoughts and images. At the end of the relaxation period, further instructions will appear.",
    instructions_screen_head: "Instructions",
    instructions_screen: "Two ’curtains’ will appear on the computer screen side by side.\
    A picture is behind one of the curtains; a blank grey wall is behind the other.\
    Using the input keys, indicate which curtain you sense covers the picture.\
    If you sense it is behind the LEFT curtain, press [A button].\
    If you sense it is behind the RIGHT curtain, press [L button].\
    Go with your immediate intuitive reaction. Don’t take the time to analyse your choice.",
    instructions_screen2: "\
    Try to maintain a peaceful meditative state of mind.\
    The selected curtain will open.\
    When the starry sky appears, clear your mind for the next trial.\
    Get ready now by resting your hands on the desk in front of the keyboard that you can press the two keys with your two index fingers.",
    instructions_screen_after: "Press either key to begin.",
    result_screen_1: "You have now completed the experiment. You were able to detect the hidden picture on ",
    result_screen_2erotic: " % of the trials with erotic pictures. ",
    result_screen_2non_erotic: " % of the trials with nonerotic pictures.",
    result_screen_2finish: "(The experimenter will explain the meaning of these results to you.)",
    result_screen_3: "Thank you for Participating in the experiment. You might have finished earlier than other participants. Please wait patiently, until everyone completes the task in order to avoid any disturbance of others. Please, raise your hand if you have any urgent questions.",
    information_form: "Information form",
    info_1: "Dear Participant, You are taking part in a research study led by Dr. Zoltan Kekecs, researcher at Lund University, Department of Psychology, and Dr. Balazs Aczel, researcher at Eotvos Lorand University, Department of Affective Psychology.",
    info_2: "The aim of the study is to develop and implement a research methodology that can increase the credibility of experimental research in general. This research methodology is implemented in the parapsychological study of Bem (2011) measuring the extrasensory perception of the participants, which is the reception of information without the use of the known senses, such as telepathy, clairvoyance, and precognition.",
    task: "Task",
    task_1: "After consenting to participate in this study, you will be asked to give some information about yourself, than you will be asked to answer five simple questions related to your thoughts about extrasensory perception and your personality. After this, two ’curtains’ will appear on the computer screen side by side. A picture is hidden behind one of the curtains; a blank grey wall is behind the other. Using the input keys, you will have to indicate which curtain you sense covers the picture. Participation will take roughly 20 minutes.",
    stimuli: "Stimuli",
    stimuli_1: "During the study, openly erotic and pornographic pictures will be displayed. The images may contain explicit and uncovered visualization of the genitals and the sexual act, that may evoke excitement or unpleasant feelings in some people. The participation in the study is fully voluntary. You can interrupt the participation without any further justification, or you can refuse to answer the questions.",
    data_handling: "Data handling",
    data_handling_1: "We handle every information strictly confidential that is collected throughout the study. The non-identifiable data collected through the study will be made available on the internet immediately after data collection on the following <a href=\"https://github.com/gy0p4k/transparent-psi-results/blob/master/results.csv\" target=\"_blank\">link</a> . The data cannot be deleted after the start of the experiment. The data shared this way serves the transparency of the study, and this data will not be linkable to the personal identity of the respondent or his or her university identification code. We will summarize the data collected during the study and run statistical analyses on it. None of the participants will be identifiable from the results of the study or the published data.",
    data_handling_2: "We will ask questions about your gender and sexual orientation, os that the experimental software is able to show erotic images that are pleasant for you. Your sexual orientation is not recorded, and no one (not even the experimenter or the principal investigator of the study) will be able to get information on your answer to this question, or the pictures you were shown.",
    data_handling_3: "If you agree with the conditions above and the participation in the experiment, please indicate it by clicking on the “I agree to participate” button below. Thank you in advance for your cooperation.",
    participants: "Participants have to be at least 18 years old in order to take part in this study.",
    feedback: "Feedback and other questions",
    feedback_1: "At the end of the experiment, the participants will get feedback of their rate of success in the experimental task and can ask questions of the experimenter present at the experiment. With any other questions, the participants may turn to Dr. Aczel Balazs experimenter via the e-mail: aczel.balazs@ppk.elte.hu.",
    feedback_2: "Do you understand the conditions of the participation?",
    acceptConsentButton: "Yes, I understand the conditions of participation",
    refuseConsentButton: "No, I refuse to participate in the study",
    consent_form: "Consent form",
    consent_form_content_1: "I declare that today I voluntarily participate in the experiment at the <a href=\"https://osf.io/72dzf/wiki/home/\" target=\"_blank\"> researcher site</a> led by Dr. Zoltan Kekecs and Dr. Balazs Aczel researchers and that I have been adequately informed in a written format about the study before it started. Additionally, I declare that\
  -          This is the first time I participate in this experiment.\
  -          I do not have any psychiatric illness.\
  -          I’m not under the influence of alcohol or drugs during the study session.",
    consent_form_content_2: "I acknowledge that information that would allow my personal identification will be handled confidentially. I agree for my de-identified data to be shared publically. I reserve the right to discontinue participation at any time during the study session.",
    consent_form_content_3: "I acknowledge that only participants at least 18 years of age can take part in the study.",
    consent_form_content_4: "Have you been adequately informed about the details of your participation, and do you accept the terms?",
    agreeParticipateButton: "Yes, I have been adequately informed about the details of my participation, and I agree to participate",
    refuseParticipateButton: "No, I refuse to participate",
    refuse: "Thank you for considering participating in our study. Have a nice day!",
    quit: "Quit"
  }

Object.keys(textEng).forEach(key => {
    domInjector("h4", ".container", key)
    domInjector("p", ".container", textEng[key])
    domInjector("textarea", ".container", "", key)

});

document.querySelectorAll("input").forEach((elem) => {
    elem.type = "text"
})

const generate = () => {
    let generated = {}
    document.querySelectorAll("textarea").forEach((elem) => {
        generated[elem.classList[0]] = elem.value
    })
    document.querySelector(".generated").value = JSON.stringify(generated, null, 2);
}

domInjector("p", ".container", "")
domInjector("button", ".container", "Generate", "", generate)
domInjector("p", ".container", "")
domInjector("textarea", ".container", "", "generated")