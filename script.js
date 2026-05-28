const fields = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  phone: document.getElementById("phone"),
  gender: document.getElementById("gender"),
  age: document.getElementById("age"),
  city: document.getElementById("city"),
  website: document.getElementById("website"),
  jobTarget: document.getElementById("jobTarget"),
  expectedSalary: document.getElementById("expectedSalary"),
  techTags: document.getElementById("techTags"),
  school: document.getElementById("school"),
  major: document.getElementById("major"),
  graduation: document.getElementById("graduation"),
  advantages: document.getElementById("advantages"),
  summary: document.getElementById("summary"),
  programmingLanguages: document.getElementById("programmingLanguages"),
  webDevelopment: document.getElementById("webDevelopment"),
  databases: document.getElementById("databases"),
  devTools: document.getElementById("devTools"),
  aiApplications: document.getElementById("aiApplications"),
  selfEvaluation: document.getElementById("selfEvaluation")
};

const avatarInput = document.getElementById("avatarInput");
const resumePreview = document.getElementById("resumePreview");
const previewAvatar = document.getElementById("previewAvatar");
const previewTechTags = document.getElementById("previewTechTags");
const projectItems = document.getElementById("projectItems");
const internshipItems = document.getElementById("internshipItems");
const previewProjects = document.getElementById("previewProjects");
const previewInternship = document.getElementById("previewInternship");
const additionalModulesContainer = document.getElementById("additionalModulesContainer");
const previewSelfEvaluationSection = document.getElementById("previewSelfEvaluationSection");
const addProjectBtn = document.getElementById("addProjectBtn");
const addInternshipBtn = document.getElementById("addInternshipBtn");
const openModuleModalBtn = document.getElementById("openModuleModalBtn");
const moduleModal = document.getElementById("moduleModal");
const closeModuleModalBtn = document.getElementById("closeModuleModalBtn");
const moduleOptions = document.getElementById("moduleOptions");
const templateRadios = document.querySelectorAll('input[name="template"]');
const resumeImportText = document.getElementById("resumeImportText");
const openImportModalBtn = document.getElementById("openImportModalBtn");
const closeImportModalBtn = document.getElementById("closeImportModalBtn");
const importModal = document.getElementById("importModal");
const resumeDropZone = document.getElementById("resumeDropZone");
const resumeFileInput = document.getElementById("resumeFileInput");
const resumeFileName = document.getElementById("resumeFileName");
const smartFillBtn = document.getElementById("smartFillBtn");
const importStatus = document.getElementById("importStatus");
const importErrorMessage = document.getElementById("importErrorMessage");
const saveDraftBtn = document.getElementById("saveDraftBtn");
const fillExampleBtn = document.getElementById("fillExampleBtn");
const clearFormBtn = document.getElementById("clearFormBtn");
const clearConfirmModal = document.getElementById("clearConfirmModal");
const cancelClearBtn = document.getElementById("cancelClearBtn");
const confirmClearBtn = document.getElementById("confirmClearBtn");
const exportTipModal = document.getElementById("exportTipModal");
const confirmExportBtn = document.getElementById("confirmExportBtn");
const downloadBtn = document.getElementById("downloadBtn");
const languageZhBtn = document.getElementById("languageZhBtn");
const languageEnBtn = document.getElementById("languageEnBtn");
const landingPage = document.getElementById("landingPage");
const mobileGuide = document.getElementById("mobileGuide");
const editorView = document.getElementById("editorView");
const startBuildingBtn = document.getElementById("startBuildingBtn");
const openScanConnectBtn = document.getElementById("openScanConnectBtn");
const scanConnectModal = document.getElementById("scanConnectModal");
const closeScanConnectBtn = document.getElementById("closeScanConnectBtn");
const desktopQrCode = document.getElementById("desktopQrCode");
const desktopQrLink = document.getElementById("desktopQrLink");
const backHomeBtn = document.getElementById("backHomeBtn");
const copyLinkBtn = document.getElementById("copyLinkBtn");
const mobileGuideHomeBtn = document.getElementById("mobileGuideHomeBtn");
const mobileQrImage = document.getElementById("mobileQrImage");
const currentLinkText = document.getElementById("currentLinkText");
const generateConnectionCodeBtn = document.getElementById("generateConnectionCodeBtn");
const connectionCodeText = document.getElementById("connectionCodeText");
const mobileCloudStatus = document.getElementById("mobileCloudStatus");
const mobileDebugBox = document.getElementById("mobileDebugBox");
const mobileDebugText = document.getElementById("mobileDebugText");
const connectionCodeInput = document.getElementById("connectionCodeInput");
const connectCloudDraftBtn = document.getElementById("connectCloudDraftBtn");
const connectionStatus = document.getElementById("connectionStatus");
const toastMessage = document.getElementById("toastMessage");
const storageKey = "studentResumeBuilderData";
const languageStorageKey = "resumeLanguage";
const cloudSessionStorageKey = "studentResumeBuilderCloudSession";
const supabaseFunctionsUrl = "https://ybbzgfhponocbjzsmldz.supabase.co/functions/v1";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InliYnpnZmhwb25vY2JqenNtbGR6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyNjAwMTUsImV4cCI6MjA5NDgzNjAxNX0.Al4EzSa1sUGnYAtuBfQlEDn49sqv7liV-HIbixkgjjM";
const productionMobileGuideUrl = "https://emilymurong.github.io/resume-building/?mode=mobile";
const translations = {
  zh: {
    langToggle: "EN",
    landingSubtitle: "手机访问，电脑编辑，快速生成专业简历",
    landingDescription: "支持 TXT、DOCX、PDF 简历导入，智能填充表单，实时预览，多模板切换和 PDF 导出。",
    startBuilding: "开始创建简历",
    scanConnectPhone: "扫码连接手机",
    scanConnectTitle: "扫码连接手机",
    coreFeaturesTitle: "核心功能",
    featureImportTitle: "文件导入",
    featureImportText: "支持 TXT、DOCX、PDF 简历导入",
    featureSmartFillTitle: "智能填充",
    featureSmartFillText: "自动识别信息并填充表单",
    featureLivePreviewTitle: "实时预览",
    featureLivePreviewText: "右侧 A4 简历实时同步",
    featureTemplatesTitle: "模板切换",
    featureTemplatesText: "支持 Classic、Modern、Minimal 模板",
    featurePdfTitle: "PDF 导出",
    featurePdfText: "一键导出可投递的 PDF 简历",
    featureMobileTitle: "手机端引导",
    featureMobileText: "手机访问时可复制链接到电脑继续编辑",
    mobileGuideTitle: "手机访问，电脑编辑",
    mobileGuideDescription: "复制下方链接，在电脑浏览器中打开，继续编辑你的简历",
    mobileGuideNote: "也可以使用其他设备扫描二维码打开",
    copyLink: "复制链接",
    mobileGuideHome: "返回首页",
    connectionCodeLabel: "输入连接码",
    connectionCodePlaceholder: "6 位数字",
    connectCloudDraft: "连接草稿",
    generateConnectionCode: "生成连接码",
    generatingConnectionCode: "正在生成连接码...",
    connectionCodeReady: "连接码已生成，请在电脑首页输入。",
    connectionCodeFailed: "连接码生成失败，请稍后重试。",
    connectingCloudDraft: "正在连接云端草稿...",
    connectedCloudDraft: "已连接云端草稿。",
    connectedDesktop: "已连接电脑。",
    desktopQrPreparing: "正在生成手机连接二维码...",
    desktopQrReady: "请用手机扫码连接。",
    desktopQrConnected: "手机已连接。",
    connectCloudDraftFailed: "连接码无效或已过期。",
    cloudDraftSaved: "云端草稿已保存。",
    cloudDraftRestored: "已恢复云端草稿。",
    cloudDraftRestoreFailed: "云端草稿恢复失败，已保留本地草稿。",
    cloudDraftSaveFailed: "云端保存失败，已保留本地草稿。",
    localSavedSyncingCloud: "已保存到本地，正在同步云端…",
    cloudSavedFast: "云端已保存。",
    cloudSyncFailedLocalSaved: "云端同步失败，本地已保存。",
    mobileCloudSessionLost: "手机云端连接已丢失，请重新扫码连接",
    enterConnectionCode: "请输入 6 位连接码。",
    backHome: "← 返回首页",
    linkCopied: "链接已复制。",
    brandDescription: "为学生项目、课程实践和实习投递准备的智能简历生成器。",
    resumeEditor: "填写简历内容",
    editorNote: "信息会实时同步到右侧 A4 预览。",
    importResumeText: "导入简历文本",
    pasteResumeContent: "粘贴简历内容",
    importResume: "导入简历",
    smartFill: "智能填充",
    saveDraft: "保存草稿",
    fillExample: "填充示例",
    clearForm: "清空表单",
    chooseTemplate: "选择模板",
    basicInfo: "基本信息",
    photo: "头像",
    choosePhoto: "选择头像",
    name: "姓名",
    email: "邮箱",
    phone: "电话",
    gender: "性别",
    age: "年龄",
    city: "城市",
    website: "Github / 个人网站",
    profile: "个人简介",
    strengths: "个人优势",
    education: "教育背景",
    school: "学校",
    major: "专业",
    graduationTime: "毕业时间",
    jobObjective: "求职意向",
    targetRole: "求职方向",
    targetCity: "目标城市",
    expectedSalary: "期望薪资",
    skillTags: "技能标签",
    professionalSkills: "专业技能",
    skillCategory: "技能分类",
    programmingLanguages: "编程语言",
    webDevelopment: "Web开发",
    database: "数据库",
    developmentTools: "开发工具",
    aiApplications: "AI应用",
    projects: "项目经历",
    internships: "实习经历",
    workExperience: "工作经历",
    selfEvaluation: "自我评价",
    addSection: "添加模块",
    downloadPdf: "下载 PDF",
    livePreview: "实时预览",
    a4Ready: "适合 A4 打印",
    expectedGraduationPrefix: "预计毕业时间：",
    targetRoleLabel: "求职方向：",
    targetCityLabel: "目标城市：",
    expectedSalaryLabel: "期望薪资：",
    programmingLanguagesLabel: "编程语言：",
    webDevelopmentLabel: "Web开发：",
    databaseLabel: "数据库：",
    developmentToolsLabel: "开发工具：",
    aiApplicationsLabel: "AI应用：",
    projectDescriptionLabel: "项目描述：",
    projectOutcomeLabel: "项目收获：",
    responsibilitiesLabel: "工作内容：",
    workOutcomeLabel: "工作收获：",
    addProject: "+ 添加项目",
    addInternship: "+ 添加实习",
    addWork: "+ 添加工作",
    companyName: "公司名称",
    role: "岗位",
    time: "时间",
    itemProject: "项目",
    itemInternship: "实习",
    itemWork: "工作",
    remove: "删除",
    moduleDialogTitle: "增加模块",
    interests: "兴趣爱好",
    portfolioImages: "图片作品",
    volunteerExperience: "志愿服务经历",
    socialLinks: "社交主页",
    clubExperience: "社团经历",
    awards: "荣誉奖项",
    videoPortfolio: "视频作品",
    certificates: "资格证书",
    customSection: "自定义模块",
    smartFillReview: "已完成智能填充。识别结果可能存在误差，请仔细检查并修改后再导出或投递简历。",
    unsupportedFile: "文件格式不支持。请上传 TXT、DOCX 或可复制文字的 PDF 文件。",
    draftSaved: "草稿已保存。",
    formCleared: "表单已清空。",
    moduleExists: "该模块已存在",
    draftRestored: "已恢复上次草稿。",
    fillSuccess: "已根据导入内容填充简历。",
    pdfIncomplete: "PDF 内容已提取，但识别可能不完整，建议检查后再导出。",
    noFillContent: "暂未识别到可填充内容。",
    noFileFillContent: "暂未识别到可填充内容，当前表单已清空，请检查导入文本。",
    noImportText: "请先粘贴或上传简历内容。",
    notEnoughContent: "当前简历内容较少，建议先填写或导入内容。",
    fileImported: "文件内容已导入，请点击“智能填充”。",
    docxEmpty: "DOCX 文件已读取，但没有提取到文本内容。",
    pdfUnrecognized: "PDF 内容无法正确识别，请尝试上传 DOCX 或 TXT 文件。",
    docxLibraryFailed: "DOCX 解析库加载失败，请检查网络后重试，或先上传 .txt 文件。",
    readingDocx: "正在读取 DOCX 文件...",
    docxReadFailed: "DOCX 文件读取失败，请重试或先转换为 .txt 文件。",
    readingPdf: "正在读取 PDF 文件...",
    fileReadFailed: "文件读取失败，请重试或直接粘贴文本。",
    pastePlaceholder: "粘贴一整段简历内容，例如姓名、联系方式、教育背景、技能、项目经历等",
    uploadFileTitle: "上传简历文件",
    uploadFileHint: "支持 TXT、DOCX、PDF 文件导入，暂不支持图片格式",
    importDialogNote: "导入成功后，文本会自动放入左侧“导入简历文本”区域。",
    dropZoneTitle: "点击选择文件，或拖拽文件到这里",
    dropZoneHint: "支持 TXT、DOCX、PDF 文件导入",
    dropZoneSmall: "暂不支持图片格式",
    namePlaceholder: "请输入姓名",
    emailPlaceholder: "请输入邮箱",
    phonePlaceholder: "请输入电话",
    genderPlaceholder: "例如：男 / 女",
    agePlaceholder: "例如：21岁",
    cityPlaceholder: "例如：上海",
    websitePlaceholder: "github.com/yourname",
    summaryPlaceholder: "请填写个人简介",
    advantagesPlaceholder: "请填写个人优势",
    schoolPlaceholder: "请输入学校",
    majorPlaceholder: "请输入专业",
    graduationPlaceholder: "例如：2027年6月",
    jobTargetPlaceholder: "请输入求职方向",
    expectedSalaryPlaceholder: "例如：8K-12K",
    techTagsPlaceholder: "例如：Vue、React、Node.js、Python",
    programmingLanguagesPlaceholder: "例如：JavaScript、TypeScript、Python、Java",
    webDevelopmentPlaceholder: "例如：HTML、CSS、Vue、React、Node.js",
    databasesPlaceholder: "例如：MySQL、MongoDB、Redis",
    devToolsPlaceholder: "例如：Git、VS Code、Figma、Postman",
    aiApplicationsPlaceholder: "例如：Prompt Engineering、Cursor、ChatGPT、AI 辅助开发",
    selfEvaluationPlaceholder: "请填写自我评价",
    placeholderName: "请填写姓名",
    placeholderJobTarget: "请填写求职方向",
    placeholderBasicInfo: "请填写基本信息",
    placeholderContact: "请填写联系方式",
    clearConfirmTitle: "确认清空表单？",
    clearConfirmDescription: "清空后，当前填写内容和本地保存的草稿都将被删除，此操作不可撤销。",
    cancel: "取消",
    confirmClear: "确认清空",
    exportTipTitle: "导出 PDF 提示",
    exportTipDescription: "打印窗口打开后，请在更多设置中关闭 Headers and footers / 页眉和页脚，再选择“保存为 PDF”。这样可以避免出现页面标题、网址、日期和页码。",
    continueExport: "知道了，继续导出",
    addModuleButton: "+ 添加模块",
    placeholderModule: "请填写模块内容",
    placeholderProjects: "请添加项目经历",
    placeholderInternships: "请添加实习经历",
    placeholderWork: "请添加工作经历",
    placeholderIntent: "请填写求职意向",
    placeholderEducation: "请填写教育背景",
    placeholderStrengths: "请填写个人优势",
    placeholderProfile: "请填写个人简介",
    placeholderSkills: "请填写技能",
    placeholderSelfEvaluation: "请填写自我评价",
    placeholderTechTags: "请填写技能标签"
  },
  en: {
    langToggle: "中文",
    landingSubtitle: "Mobile access, desktop editing, and smart resume export",
    landingDescription: "Import TXT, DOCX, or PDF resumes, auto-fill your form, preview in real time, switch templates, and export as PDF.",
    startBuilding: "Start Building",
    scanConnectPhone: "Scan to Connect",
    scanConnectTitle: "Scan to Connect Phone",
    coreFeaturesTitle: "Core Features",
    featureImportTitle: "Resume Import",
    featureImportText: "Import resumes from TXT, DOCX, and PDF files",
    featureSmartFillTitle: "Smart Fill",
    featureSmartFillText: "Recognize resume content and auto-fill the form",
    featureLivePreviewTitle: "Live Preview",
    featureLivePreviewText: "Preview your A4 resume in real time",
    featureTemplatesTitle: "Templates",
    featureTemplatesText: "Switch between Classic, Modern, and Minimal templates",
    featurePdfTitle: "PDF Export",
    featurePdfText: "Export your resume as a PDF file",
    featureMobileTitle: "Mobile Guide",
    featureMobileText: "Copy the link on mobile and continue editing on desktop",
    mobileGuideTitle: "Mobile Access, Desktop Editing",
    mobileGuideDescription: "Copy the link below and open it in your desktop browser to continue editing your resume",
    mobileGuideNote: "You can also scan the QR code with another device",
    copyLink: "Copy Link",
    mobileGuideHome: "Back Home",
    connectionCodeLabel: "Connection Code",
    connectionCodePlaceholder: "6 digits",
    connectCloudDraft: "Connect Draft",
    generateConnectionCode: "Generate Code",
    generatingConnectionCode: "Generating connection code...",
    connectionCodeReady: "Code generated. Enter it on the desktop home page.",
    connectionCodeFailed: "Could not generate the code. Please try again.",
    connectingCloudDraft: "Connecting cloud draft...",
    connectedCloudDraft: "Cloud draft connected.",
    connectedDesktop: "Desktop connected.",
    desktopQrPreparing: "Creating phone connection QR code...",
    desktopQrReady: "Scan with your phone to connect.",
    desktopQrConnected: "Phone connected.",
    connectCloudDraftFailed: "The code is invalid or expired.",
    cloudDraftSaved: "Cloud draft saved.",
    cloudDraftRestored: "Cloud draft restored.",
    cloudDraftRestoreFailed: "Cloud restore failed. Local draft is kept.",
    cloudDraftSaveFailed: "Cloud save failed. Local draft is kept.",
    localSavedSyncingCloud: "Saved locally. Syncing cloud...",
    cloudSavedFast: "Cloud saved.",
    cloudSyncFailedLocalSaved: "Cloud sync failed. Local draft is saved.",
    mobileCloudSessionLost: "Mobile cloud connection lost. Please scan the QR code again.",
    enterConnectionCode: "Please enter the 6-digit code.",
    backHome: "← Back Home",
    linkCopied: "Link copied.",
    brandDescription: "Smart resume builder for student projects, coursework, and internship applications.",
    resumeEditor: "Resume Editor",
    editorNote: "Your information syncs live to the A4 preview.",
    importResumeText: "Import Resume Text",
    pasteResumeContent: "Paste resume content",
    importResume: "Import Resume",
    smartFill: "Smart Fill",
    saveDraft: "Save Draft",
    fillExample: "Fill Example",
    clearForm: "Clear Form",
    chooseTemplate: "Choose Template",
    basicInfo: "Basic Information",
    photo: "Photo",
    choosePhoto: "Choose Photo",
    name: "Name",
    email: "Email",
    phone: "Phone",
    gender: "Gender",
    age: "Age",
    city: "City",
    website: "GitHub / Website",
    profile: "Profile",
    strengths: "Strengths",
    education: "Education",
    school: "School",
    major: "Major",
    graduationTime: "Graduation Time",
    jobObjective: "Job Objective",
    targetRole: "Target Role",
    targetCity: "Target City",
    expectedSalary: "Expected Salary",
    skillTags: "Skill Tags",
    professionalSkills: "Professional Skills",
    skillCategory: "Professional Skills",
    programmingLanguages: "Programming Languages",
    webDevelopment: "Web Development",
    database: "Database",
    developmentTools: "Development Tools",
    aiApplications: "AI Applications",
    projects: "Projects",
    internships: "Internship Experience",
    workExperience: "Work Experience",
    selfEvaluation: "Self Evaluation",
    addSection: "Add Section",
    downloadPdf: "Download PDF",
    livePreview: "Live Preview",
    a4Ready: "A4 Print Ready",
    expectedGraduationPrefix: "Expected Graduation: ",
    targetRoleLabel: "Target Role:",
    targetCityLabel: "Target City:",
    expectedSalaryLabel: "Expected Salary:",
    programmingLanguagesLabel: "Programming Languages:",
    webDevelopmentLabel: "Web Development:",
    databaseLabel: "Database:",
    developmentToolsLabel: "Development Tools:",
    aiApplicationsLabel: "AI Applications:",
    projectDescriptionLabel: "Description:",
    projectOutcomeLabel: "Outcome:",
    responsibilitiesLabel: "Responsibilities:",
    workOutcomeLabel: "Outcome:",
    addProject: "+ Add Project",
    addInternship: "+ Add Internship",
    addWork: "+ Add Work",
    companyName: "Company",
    role: "Role",
    time: "Time",
    itemProject: "Project",
    itemInternship: "Internship",
    itemWork: "Work",
    remove: "Remove",
    moduleDialogTitle: "Add Section",
    interests: "Interests",
    portfolioImages: "Portfolio Images",
    volunteerExperience: "Volunteer Experience",
    socialLinks: "Social Links",
    clubExperience: "Club Experience",
    awards: "Awards",
    videoPortfolio: "Video Portfolio",
    certificates: "Certificates",
    customSection: "Custom Section",
    smartFillReview: "Smart fill completed. The recognition result may contain errors. Please review and edit carefully before exporting or submitting your resume.",
    unsupportedFile: "Unsupported file format. Please upload a TXT, DOCX, or text-based PDF file.",
    draftSaved: "Draft saved.",
    formCleared: "Form cleared.",
    moduleExists: "This section already exists.",
    draftRestored: "Previous draft restored.",
    fillSuccess: "Resume filled from imported content.",
    pdfIncomplete: "PDF content extracted, but recognition may be incomplete. Please review before exporting.",
    noFillContent: "No fillable content was recognized.",
    noFileFillContent: "No fillable content was recognized. The current form has been cleared; please check the imported text.",
    noImportText: "Please paste or upload resume content first.",
    notEnoughContent: "The resume content is limited. Please fill in or import more information first.",
    fileImported: "File content imported. Please click “Smart Fill”.",
    docxEmpty: "The DOCX file was read, but no text content was extracted.",
    pdfUnrecognized: "PDF content could not be recognized. Please try uploading a DOCX or TXT file.",
    docxLibraryFailed: "The DOCX parser failed to load. Please check your network and try again, or upload a .txt file first.",
    readingDocx: "Reading DOCX file...",
    docxReadFailed: "DOCX reading failed. Please try again or convert it to a .txt file first.",
    readingPdf: "Reading PDF file...",
    fileReadFailed: "File reading failed. Please try again or paste the text directly.",
    pastePlaceholder: "Paste your full resume content, such as name, contact information, education, skills, and project experience.",
    uploadFileTitle: "Upload Resume File",
    uploadFileHint: "Supports TXT, DOCX, and PDF imports. Image files are not supported.",
    importDialogNote: "After a successful import, the text will be placed in the Import Resume Text area.",
    dropZoneTitle: "Click to choose a file, or drag it here",
    dropZoneHint: "Supports TXT, DOCX, and PDF imports",
    dropZoneSmall: "Image files are not supported",
    namePlaceholder: "Enter your name",
    emailPlaceholder: "Enter your email",
    phonePlaceholder: "Enter your phone number",
    genderPlaceholder: "Enter your gender",
    agePlaceholder: "Enter your age",
    cityPlaceholder: "Enter your city",
    websitePlaceholder: "github.com/yourname",
    summaryPlaceholder: "Write your profile",
    advantagesPlaceholder: "Write your strengths",
    schoolPlaceholder: "Enter your school",
    majorPlaceholder: "Enter your major",
    graduationPlaceholder: "Enter graduation time",
    jobTargetPlaceholder: "Enter your target role",
    expectedSalaryPlaceholder: "Enter expected salary",
    techTagsPlaceholder: "Vue, React, Node.js, Python",
    programmingLanguagesPlaceholder: "JavaScript, TypeScript, Python, Java",
    webDevelopmentPlaceholder: "HTML, CSS, Vue, React, Node.js",
    databasesPlaceholder: "MySQL, MongoDB, Redis",
    devToolsPlaceholder: "Git, VS Code, Figma, Postman",
    aiApplicationsPlaceholder: "Prompt Engineering, Cursor, ChatGPT, AI-assisted development",
    selfEvaluationPlaceholder: "Write your self evaluation",
    placeholderName: "Enter your name",
    placeholderJobTarget: "Enter target role",
    placeholderBasicInfo: "Enter basic information",
    placeholderContact: "Enter contact information",
    clearConfirmTitle: "Clear the form?",
    clearConfirmDescription: "This will delete the current form content and the locally saved draft. This action cannot be undone.",
    cancel: "Cancel",
    confirmClear: "Clear Form",
    exportTipTitle: "PDF Export Notice",
    exportTipDescription: "When the print window opens, please turn off Headers and footers in More settings, then choose “Save as PDF”.",
    continueExport: "Got it, continue exporting",
    addModuleButton: "+ Add Section",
    placeholderModule: "Please fill in this section",
    placeholderProjects: "Please add projects",
    placeholderInternships: "Please add internship experience",
    placeholderWork: "Please add work experience",
    placeholderIntent: "Please fill in job objective",
    placeholderEducation: "Please fill in education",
    placeholderStrengths: "Please fill in strengths",
    placeholderProfile: "Please fill in profile",
    placeholderSkills: "Please fill in skills",
    placeholderSelfEvaluation: "Please fill in self evaluation",
    placeholderTechTags: "Please fill in skill tags"
  }
};
const templateNames = ["classic", "modern", "minimal"];
const moduleDefinitions = [
  { key: "skills", titleKey: "professionalSkills", existing: true, targetId: "programmingLanguages" },
  { key: "hobbies", titleKey: "interests", type: "textarea" },
  { key: "portfolioImages", titleKey: "portfolioImages", type: "textarea", placeholder: "可填写作品图片链接或作品说明" },
  { key: "internship", titleKey: "internships", existing: true, targetId: "internshipItems" },
  { key: "work", titleKey: "workExperience", type: "work" },
  { key: "volunteer", titleKey: "volunteerExperience", type: "textarea" },
  { key: "social", titleKey: "socialLinks", type: "input", placeholder: "例如：LinkedIn / 个人主页 / 作品集链接" },
  { key: "club", titleKey: "clubExperience", type: "textarea" },
  { key: "awards", titleKey: "awards", type: "textarea" },
  { key: "videos", titleKey: "videoPortfolio", type: "textarea", placeholder: "可填写视频链接或作品说明" },
  { key: "certificates", titleKey: "certificates", type: "textarea" },
  { key: "project", titleKey: "projects", existing: true, targetId: "projectItems" },
  { key: "custom", titleKey: "customSection", type: "custom" }
];
const moduleMap = Object.fromEntries(moduleDefinitions.map((definition) => [definition.key, definition]));
const legacyDefaultProjectNames = ["校园二手交易平台", "课程数据可视化项目"];
const legacyDefaultInternshipNames = ["学生技术社团"];
const legacyDefaultSnippets = ["负责首页、商品列表", "使用图表组件展示问卷数据", "参与社团官网维护"];
const topLevelHeadings = [
  "基本信息",
  "个人信息",
  "联系方式",
  "Education",
  "教育背景",
  "教育经历",
  "求职意向",
  "求职方向",
  "专业技能",
  "技能",
  "技能特长",
  "项目经历",
  "项目经验",
  "实习经历",
  "工作经历",
  "校园经历",
  "个人优势",
  "个人简介",
  "自我评价"
];
const fieldHeadings = [
  ...topLevelHeadings,
  "姓名",
  "名字",
  "性别",
  "年龄",
  "城市",
  "所在地",
  "现居地",
  "目标城市",
  "学校",
  "毕业院校",
  "院校",
  "School",
  "专业",
  "Major",
  "毕业时间",
  "预计毕业时间",
  "毕业年份",
  "Graduation",
  "Graduation Date",
  "电话",
  "手机",
  "联系方式",
  "邮箱",
  "Email",
  "Github",
  "GitHub",
  "个人网站",
  "网站",
  "主页",
  "期望薪资",
  "薪资",
  "应聘岗位",
  "目标岗位",
  "意向岗位",
  "编程语言",
  "Web开发",
  "Web 开发",
  "前端开发",
  "数据库",
  "开发工具",
  "AI应用",
  "AI 应用",
  "技术标签",
  "技能标签",
  "项目名称",
  "公司名称",
  "岗位",
  "担任角色",
  "角色",
  "职责",
  "时间"
];

const preview = {
  name: document.getElementById("previewName"),
  email: document.getElementById("previewEmail"),
  phone: document.getElementById("previewPhone"),
  gender: document.getElementById("previewGender"),
  age: document.getElementById("previewAge"),
  city: document.getElementById("previewCity"),
  citySection: document.getElementById("previewCitySection"),
  website: document.getElementById("previewWebsite"),
  jobTarget: document.getElementById("previewJobTarget"),
  jobTargetSection: document.getElementById("previewJobTargetSection"),
  expectedSalary: document.getElementById("previewExpectedSalary"),
  school: document.getElementById("previewSchool"),
  schoolInline: document.getElementById("previewSchoolInline"),
  major: document.getElementById("previewMajor"),
  majorInline: document.getElementById("previewMajorInline"),
  graduation: document.getElementById("previewGraduation"),
  advantages: document.getElementById("previewAdvantages"),
  summary: document.getElementById("previewSummary"),
  programmingLanguages: document.getElementById("previewProgrammingLanguages"),
  webDevelopment: document.getElementById("previewWebDevelopment"),
  databases: document.getElementById("previewDatabases"),
  devTools: document.getElementById("previewDevTools"),
  aiApplications: document.getElementById("previewAiApplications"),
  selfEvaluation: document.getElementById("previewSelfEvaluation")
};

let avatarData = "";
let selectedTemplate = "classic";
let projectsData = [];
let internshipsData = [];
let workData = [];
let addedModules = {};
let toastTimer;
let importErrorTimer;
let importedResumeSource = "";
let currentLanguage = localStorage.getItem(languageStorageKey) === "en" ? "en" : "zh";
let currentView = "";
let cloudSession = null;
let scanConnectPollTimer = null;
let scanConnectRequestId = 0;
let desktopCloudSyncTimer = null;
let desktopCloudSyncInFlight = false;
let lastCloudVersion = null;
let lastCloudUpdatedAt = "";
let mobileModeHomeOverride = false;
const desktopBreakpoint = 1024;
const isMobileModeFromUrl =
  new URLSearchParams(window.location.search).get("mode") === "mobile";

function isDesktopViewport() {
  return !isMobileModeFromUrl && window.innerWidth >= desktopBreakpoint;
}

function getValue(fieldName) {
  return fields[fieldName].value.trim();
}

function loadCloudSession() {
  const savedSession = localStorage.getItem(cloudSessionStorageKey);

  if (!savedSession) {
    cloudSession = null;
    return null;
  }

  try {
    const session = JSON.parse(savedSession);

    if (session?.draftId && (session?.draftToken || session?.connectionCode)) {
      cloudSession = session;
      return session;
    }
  } catch (error) {
    localStorage.removeItem(cloudSessionStorageKey);
  }

  cloudSession = null;
  return null;
}

function saveCloudSession(session) {
  cloudSession = session;

  if (!session) {
    localStorage.removeItem(cloudSessionStorageKey);
    return;
  }

  localStorage.setItem(cloudSessionStorageKey, JSON.stringify(session));
}

function updateCloudSession(updates) {
  const session = loadCloudSession();

  if (!session) {
    return null;
  }

  const nextSession = { ...session, ...updates };
  saveCloudSession(nextSession);

  return nextSession;
}

function buildCloudSession(result, source, connectionCode = "") {
  const draftToken = result.draftToken || result.draft_token || "";
  const hasDraftToken = Boolean(draftToken);

  return {
    draftId: result.draftId,
    draftToken,
    connectionCode: result.connectionCode || connectionCode,
    cloudConnected: true,
    source,
    readOnly: Boolean(result.readOnly && !hasDraftToken),
    canSave: Boolean(hasDraftToken || result.canSave)
  };
}

function saveMobileWritableSession(draftId, draftToken, connectionCode) {
  const session = {
    draftId,
    draftToken,
    connectionCode,
    cloudConnected: true,
    readOnly: false,
    canSave: true,
    source: "mobile"
  };

  saveCloudSession(session);
  return session;
}

function saveDesktopReadOnlySession(draftId, connectionCode) {
  const session = {
    draftId,
    connectionCode,
    readOnly: true,
    canSave: false,
    cloudConnected: true,
    source: "desktop"
  };

  saveCloudSession(session);
  return session;
}

cloudSession = loadCloudSession();

function rememberCloudSnapshot(result) {
  if (!result) {
    return;
  }

  lastCloudVersion = result.version ?? lastCloudVersion;
  lastCloudUpdatedAt = result.updatedAt || lastCloudUpdatedAt;
  updateCloudSession({
    version: result.version,
    updatedAt: result.updatedAt
  });
}

const mobileDebugState = {
  mode: "",
  draftId: "",
  code: "",
  draftTokenExists: false,
  sessionDraftId: "",
  sessionConnectionCode: "",
  sessionDraftTokenExists: false,
  autoConnectStarted: false,
  connectCloudDraftResponse: "",
  connectCloudDraftError: ""
};

function renderMobileDebugBox() {
  if (!mobileDebugBox || !mobileDebugText || !isMobileModeFromUrl) {
    return;
  }

  mobileDebugBox.classList.add("is-visible");
  mobileDebugText.textContent = JSON.stringify(mobileDebugState, null, 2);
}

function updateMobileDebugBox(updates) {
  Object.assign(mobileDebugState, updates);
  renderMobileDebugBox();
}

function getResumeDataFromForm() {
  const formData = {};

  Object.keys(fields).forEach((fieldName) => {
    formData[fieldName] = fields[fieldName].value;
  });

  formData.avatar = avatarData;
  formData.template = selectedTemplate;
  formData.projects = projectsData;
  formData.internships = internshipsData;
  formData.work = workData;
  formData.addedModules = addedModules;

  return formData;
}

function applyResumeData(formData) {
  Object.keys(fields).forEach((fieldName) => {
    fields[fieldName].value = formData?.[fieldName] || "";
  });

  if (!formData?.programmingLanguages && formData?.skills) {
    fields.programmingLanguages.value = formData.skills;
  }

  avatarData = formData?.avatar || "";
  selectedTemplate = formData?.template || "classic";
  projectsData = normalizeExperienceList(formData?.projects, formData?.projects);
  internshipsData = normalizeExperienceList(
    formData?.internships,
    formData?.internship,
  );
  workData = normalizeExperienceList(formData?.work);
  addedModules = normalizeAddedModules(formData?.addedModules);

  if (!templateNames.includes(selectedTemplate)) {
    selectedTemplate = "classic";
  }

  templateRadios.forEach((radio) => {
    radio.checked = radio.value === selectedTemplate;
  });
}

async function callCloudFunction(functionName, payload) {
  const response = await fetch(`${supabaseFunctionsUrl}/${functionName}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: supabaseAnonKey,
      Authorization: `Bearer ${supabaseAnonKey}`
    },
    body: JSON.stringify(payload)
  });
  const body = await response.json().catch(() => ({}));

  if (!response.ok) {
    const error = new Error(body?.error || body?.message || functionName);
    error.status = response.status;
    error.body = body;
    error.functionName = functionName;
    throw error;
  }

  return body;
}

async function createCloudDraft() {
  const source = currentView === "mobileGuide"
    ? "mobile"
    : (isDesktopViewport() ? "desktop" : "mobile");
  const result = await callCloudFunction("create-cloud-draft", {
    resumeJson: getResumeDataFromForm(),
    source
  });

  saveCloudSession(buildCloudSession(result, source, result.connectionCode || ""));

  return result;
}

async function connectCloudDraft(code, draftId = "", draftToken = "") {
  const payload = draftId ? { draftId, connectionCode: code, code } : { code };
  const result = await callCloudFunction("connect-cloud-draft", payload);
  const source = isDesktopViewport() ? "desktop" : "mobile";

  if (source === "mobile" && draftToken) {
    saveMobileWritableSession(result.draftId || draftId, draftToken, code);
  } else {
    saveCloudSession(buildCloudSession(
      result,
      source,
      code
    ));
  }

  applyResumeData(result.resumeJson || {});
  saveResumeData();
  refreshResumeState();

  return result;
}

async function checkConnectionStatus(session) {
  return callCloudFunction("check-connection-status", {
    draftId: session.draftId,
    draftToken: session.draftToken,
    connectionCode: session.connectionCode
  });
}

async function loadCloudDraft() {
  const session = loadCloudSession();

  if (!session?.draftId && !session?.connectionCode) {
    return null;
  }

  const payload = session.draftToken
    ? {
        draftId: session.draftId,
        draftToken: session.draftToken
      }
    : {
        draftId: session.draftId,
        connectionCode: session.connectionCode
      };

  return callCloudFunction("load-cloud-draft", payload);
}

async function saveCloudDraft() {
  const session = loadCloudSession();

  if (!session?.draftId || !session?.draftToken) {
    return null;
  }

  const source = isDesktopViewport() ? "desktop" : "mobile";

  return callCloudFunction("save-cloud-draft", {
    draftId: session.draftId,
    draftToken: session.draftToken,
    resumeJson: getResumeDataFromForm(),
    source,
    lastSyncSource: source
  });
}

function t(key) {
  return translations[currentLanguage][key] || translations.zh[key] || key;
}

function getShareUrl() {
  return window.location.href.split("#")[0];
}

function getMobileModeUrl(params = {}) {
  const localHosts = ["127.0.0.1", "localhost"];
  let url;

  if (localHosts.includes(window.location.hostname)) {
    url = new URL(productionMobileGuideUrl);
  } else {
    url = new URL(window.location.href);
    url.hash = "";
    url.search = "";
    url.searchParams.set("mode", "mobile");
  }

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
}

function getMobileConnectParams() {
  const params = new URLSearchParams(window.location.search);
  const code = params.get("code")?.replace(/\D/g, "").slice(0, 6) || "";
  const draftId = params.get("draftId") || params.get("draft_id") || "";
  const draftToken = params.get("draftToken") || params.get("draft_token") || "";

  return { draftId, code, draftToken };
}

function renderQrToImage(image, text) {
  if (window.QRCode?.toDataURL) {
    window.QRCode.toDataURL(
      text,
      {
        errorCorrectionLevel: "L",
        margin: 4,
        width: 320
      },
      (error, dataUrl) => {
        if (!error) {
          image.src = dataUrl;
        }
      },
    );
  }
}

function updateMobileGuideLink() {
  const shareUrl = getMobileModeUrl();

  if (currentLinkText) {
    currentLinkText.textContent = shareUrl;
  }

  if (mobileQrImage) {
    renderQrToImage(mobileQrImage, shareUrl);
  }
}

function renderDesktopQr(mobileUrl) {
  desktopQrLink.textContent = mobileUrl;

  if (window.QRCode?.toString) {
    window.QRCode.toString(
      mobileUrl,
      {
        type: "svg",
        errorCorrectionLevel: "L",
        margin: 4
      },
      (error, svg) => {
        desktopQrCode.innerHTML = error ? "" : svg;
      },
    );
  }
}

function showView(viewName) {
  currentView = viewName;

  if (viewName !== "editor") {
    stopDesktopCloudPolling();
  }

  document.body.classList.remove("view-landing", "view-mobile-guide", "view-editor");
  document.body.classList.add(`view-${viewName.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`);

  if (landingPage) {
    landingPage.setAttribute("aria-hidden", String(viewName !== "landing"));
  }

  if (mobileGuide) {
    mobileGuide.setAttribute("aria-hidden", String(viewName !== "mobileGuide"));
  }

  if (editorView) {
    editorView.setAttribute("aria-hidden", String(viewName !== "editor"));
  }

  if (viewName === "mobileGuide") {
    updateMobileGuideLink();
  }

  if (viewName === "editor" && isMobileModeFromUrl) {
    const phoneSession = loadCloudSession();
    console.log("[PHONE SESSION] before editor", phoneSession);
    console.log("[PHONE SESSION] draftId", phoneSession?.draftId || "");
    console.log("[PHONE SESSION] connectionCode", phoneSession?.connectionCode || "");
    console.log("[PHONE SESSION] draftToken exists", Boolean(phoneSession?.draftToken));
    updateMobileDebugBox({
      sessionDraftId: phoneSession?.draftId || "",
      sessionConnectionCode: phoneSession?.connectionCode || "",
      sessionDraftTokenExists: Boolean(phoneSession?.draftToken)
    });
  }

  if (viewName === "editor" && !isMobileModeFromUrl) {
    window.setTimeout(() => {
      if (currentView === "editor" && isDesktopReadOnlyCloudSession()) {
        startDesktopCloudPolling();
      }
    }, 0);
  }

  window.scrollTo({ top: 0, left: 0 });
}

function showDefaultEntryView() {
  if (isMobileModeFromUrl && mobileModeHomeOverride) {
    showView("landing");
    return;
  }

  if (isMobileModeFromUrl && !mobileModeHomeOverride) {
    showView("mobileGuide");
    return;
  }

  showView(isDesktopViewport() ? "landing" : "mobileGuide");
}

function showToast(message) {
  toastMessage.textContent = message;
  toastMessage.classList.remove("is-error");
  toastMessage.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastMessage.classList.remove("is-visible");
  }, 2600);
}

function showErrorToast(message) {
  toastMessage.textContent = message;
  toastMessage.classList.add("is-visible", "is-error");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toastMessage.classList.remove("is-visible", "is-error");
  }, 4200);
}

function hideImportErrorMessage() {
  importErrorMessage.classList.remove("is-visible");
  importErrorMessage.textContent = "";
  window.clearTimeout(importErrorTimer);
}

function showImportErrorMessage(message) {
  importErrorMessage.textContent = message;
  importErrorMessage.classList.add("is-visible");
  showErrorToast(message);
  window.clearTimeout(importErrorTimer);
  importErrorTimer = window.setTimeout(() => {
    hideImportErrorMessage();
  }, 4800);
}

function openImportModal() {
  importModal.classList.add("is-open");
  importModal.setAttribute("aria-hidden", "false");
  closeImportModalBtn.focus();
}

function closeImportModal() {
  importModal.classList.remove("is-open");
  importModal.setAttribute("aria-hidden", "true");
  resumeDropZone.classList.remove("is-dragover");
  hideImportErrorMessage();
}

function openClearConfirmModal() {
  clearConfirmModal.classList.add("is-open");
  clearConfirmModal.setAttribute("aria-hidden", "false");
  cancelClearBtn.focus();
}

function closeClearConfirmModal() {
  clearConfirmModal.classList.remove("is-open");
  clearConfirmModal.setAttribute("aria-hidden", "true");
  clearFormBtn.focus();
}

function openExportTipModal() {
  exportTipModal.classList.add("is-open");
  exportTipModal.setAttribute("aria-hidden", "false");
  confirmExportBtn.focus();
}

function closeExportTipModal() {
  exportTipModal.classList.remove("is-open");
  exportTipModal.setAttribute("aria-hidden", "true");
  downloadBtn.focus();
}

function stopScanConnectPolling() {
  if (scanConnectPollTimer) {
    window.clearInterval(scanConnectPollTimer);
    scanConnectPollTimer = null;
  }
}

function startScanConnectPolling(session) {
  stopScanConnectPolling();

  scanConnectPollTimer = window.setInterval(async () => {
    try {
      const result = await checkConnectionStatus(session);
      console.log("[DESKTOP] polling status", result);

      if (!result?.connected) {
        return;
      }

      console.log("[DESKTOP] connected detected");
      console.log("[DESKTOP] loading draft", {
        draftId: session?.draftId,
        connectionCode: session?.connectionCode
      });
      saveDesktopReadOnlySession(session.draftId, session.connectionCode);
      console.log("[DESKTOP] saved session", loadCloudSession());
      console.log("[DESKTOP] session confirmed", isDesktopReadOnlyCloudSession());
      stopScanConnectPolling();
      await refreshFromCloudSession();
      closeScanConnectModal();
      connectionStatus.textContent = t("desktopQrConnected");
      showToast(t("desktopQrConnected"));
      showView("editor");
      startDesktopCloudPolling();
    } catch (error) {
      console.error("check connection status failed", error);
    }
  }, 2000);
}

async function openScanConnectModal() {
  const requestId = scanConnectRequestId + 1;
  scanConnectRequestId = requestId;
  desktopQrCode.innerHTML = "";
  desktopQrLink.textContent = t("desktopQrPreparing");
  connectionStatus.textContent = t("desktopQrPreparing");
  scanConnectModal.classList.add("is-open");
  scanConnectModal.setAttribute("aria-hidden", "false");
  closeScanConnectBtn.focus();

  try {
    const result = await createCloudDraft();
    const draftToken = result.draftToken || result.draft_token || "";
    const desktopSession = saveDesktopReadOnlySession(
      result.draftId,
      result.connectionCode
    );
    const pollingSession = {
      ...desktopSession,
      draftToken
    };
    console.log("[QR] created draft", {
      draftId: result.draftId,
      connectionCode: result.connectionCode,
      draftTokenExists: Boolean(draftToken)
    });
    console.log("[QR] desktop draftId", result.draftId);
    console.log("[QR] connectionCode", result.connectionCode);
    console.log("[QR] draftToken exists", Boolean(draftToken));

    if (requestId !== scanConnectRequestId) {
      return;
    }

    const mobileUrl = getMobileModeUrl({
      draftId: result.draftId,
      code: result.connectionCode,
      draftToken
    });
    console.log("[QR] generated url", mobileUrl);
    console.log("[QR] generated url contains draftToken", mobileUrl.includes("draftToken="));

    renderDesktopQr(mobileUrl);
    desktopQrLink.textContent = mobileUrl;
    connectionStatus.textContent = t("desktopQrReady");
    startScanConnectPolling(pollingSession);
  } catch (error) {
    console.error("create desktop QR session failed", error);
    desktopQrLink.textContent = t("connectionCodeFailed");
    connectionStatus.textContent = t("connectionCodeFailed");
    showErrorToast(t("connectionCodeFailed"));
  }
}

function closeScanConnectModal() {
  scanConnectModal.classList.remove("is-open");
  scanConnectModal.setAttribute("aria-hidden", "true");
  openScanConnectBtn.focus();
}

function openModuleModal() {
  renderModuleOptions();
  moduleModal.classList.add("is-open");
  moduleModal.setAttribute("aria-hidden", "false");
  closeModuleModalBtn.focus();
}

function closeModuleModal() {
  moduleModal.classList.remove("is-open");
  moduleModal.setAttribute("aria-hidden", "true");
  openModuleModalBtn.focus();
}

function formatGraduationLabel(value) {
  return value ? `${t("expectedGraduationPrefix")}${value}` : "";
}

function setText(selector, value) {
  const element = document.querySelector(selector);

  if (element) {
    element.textContent = value;
  }
}

function setPlaceholder(controlId, value) {
  const control = document.getElementById(controlId);

  if (control) {
    control.placeholder = value;
  }
}

function setLabelText(controlId, value) {
  const control = document.getElementById(controlId);
  const label = control ? control.closest("label") : null;

  if (!label) {
    return;
  }

  const textNode = Array.from(label.childNodes).find((node) => node.nodeType === 3 && node.textContent.trim());

  if (textNode) {
    textNode.textContent = `\n            ${value}\n            `;
  }
}

function setLegendText(fieldsetIndex, value) {
  const legend = document.querySelectorAll("#resumeForm .form-step legend strong")[fieldsetIndex];

  if (legend) {
    legend.textContent = value;
  }
}

function updateStaticLanguage() {
  document.documentElement.lang = currentLanguage === "en" ? "en" : "zh-CN";
  document.title = "Resume-Building";
  document.querySelectorAll("[data-lang]").forEach((button) => {
    const isActive = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  setText(".landing-subtitle", t("landingSubtitle"));
  setText(".landing-description", t("landingDescription"));
  setText("#startBuildingBtn", t("startBuilding"));
  setText("#openScanConnectBtn", t("scanConnectPhone"));
  setText("#scanConnectTitle", t("scanConnectTitle"));
  setText("#coreFeaturesTitle", t("coreFeaturesTitle"));
  setText("#mobileGuideTitle", t("mobileGuideTitle"));
  setText(".mobile-guide-description", t("mobileGuideDescription"));
  setText(".mobile-guide-note", t("mobileGuideNote"));
  setText("#copyLinkBtn", t("copyLink"));
  setText("#mobileGuideHomeBtn", t("mobileGuideHome"));
  setText(".connection-panel label", t("connectionCodeLabel"));
  setText("#connectCloudDraftBtn", t("connectCloudDraft"));
  setText("#generateConnectionCodeBtn", t("generateConnectionCode"));
  setPlaceholder("connectionCodeInput", t("connectionCodePlaceholder"));
  setText("#backHomeBtn", t("backHome"));

  const featureTexts = [
    ["featureImportTitle", "featureImportText"],
    ["featureSmartFillTitle", "featureSmartFillText"],
    ["featureLivePreviewTitle", "featureLivePreviewText"],
    ["featureTemplatesTitle", "featureTemplatesText"],
    ["featurePdfTitle", "featurePdfText"],
    ["featureMobileTitle", "featureMobileText"]
  ];

  document.querySelectorAll(".feature-card").forEach((card, index) => {
    const textKeys = featureTexts[index];

    if (!textKeys) {
      return;
    }

    card.querySelector("strong").textContent = t(textKeys[0]);
    card.querySelector("p").textContent = t(textKeys[1]);
  });

  setText(".brand-copy p", t("brandDescription"));
  setText(".panel-title h1", t("resumeEditor"));
  setText(".panel-title p", t("editorNote"));
  setText(".import-panel .step-heading h2", t("importResumeText"));
  setLabelText("resumeImportText", t("pasteResumeContent"));
  setText("#openImportModalBtn", t("importResume"));
  setText("#importDialogTitle", t("importResume"));
  setText(".file-import-box span", t("uploadFileTitle"));
  setText(".file-import-box small", t("uploadFileHint"));
  setText("#resumeDropZone strong", t("dropZoneTitle"));
  setText("#resumeDropZone span", t("dropZoneHint"));
  setText("#resumeDropZone small", t("dropZoneSmall"));
  setText(".import-dialog-note", t("importDialogNote"));
  setText("#smartFillBtn", t("smartFill"));
  setText("#saveDraftBtn", t("saveDraft"));
  setText("#fillExampleBtn", t("fillExample"));
  setText("#clearFormBtn", t("clearForm"));
  setText(".template-picker .step-heading h2", t("chooseTemplate"));
  setText("#downloadBtn", t("downloadPdf"));
  setText(".preview-toolbar strong", t("livePreview"));
  setText(".preview-toolbar small", t("a4Ready"));
  setText("#openModuleModalBtn", t("addModuleButton"));
  setText("#moduleDialogTitle", t("moduleDialogTitle"));
  setText("#clearConfirmTitle", t("clearConfirmTitle"));
  setText("#clearConfirmDescription", t("clearConfirmDescription"));
  setText("#cancelClearBtn", t("cancel"));
  setText("#confirmClearBtn", t("confirmClear"));
  setText("#exportTipTitle", t("exportTipTitle"));
  setText("#exportTipDescription", t("exportTipDescription"));
  setText("#confirmExportBtn", t("continueExport"));
  setText(".avatar-upload-copy span", t("photo"));
  setLabelText("avatarInput", t("choosePhoto"));

  const placeholders = {
    resumeImportText: "pastePlaceholder",
    name: "namePlaceholder",
    email: "emailPlaceholder",
    phone: "phonePlaceholder",
    gender: "genderPlaceholder",
    age: "agePlaceholder",
    city: "cityPlaceholder",
    website: "websitePlaceholder",
    summary: "summaryPlaceholder",
    advantages: "advantagesPlaceholder",
    school: "schoolPlaceholder",
    major: "majorPlaceholder",
    graduation: "graduationPlaceholder",
    jobTarget: "jobTargetPlaceholder",
    expectedSalary: "expectedSalaryPlaceholder",
    techTags: "techTagsPlaceholder",
    programmingLanguages: "programmingLanguagesPlaceholder",
    webDevelopment: "webDevelopmentPlaceholder",
    databases: "databasesPlaceholder",
    devTools: "devToolsPlaceholder",
    aiApplications: "aiApplicationsPlaceholder",
    selfEvaluation: "selfEvaluationPlaceholder"
  };

  Object.entries(placeholders).forEach(([controlId, key]) => {
    setPlaceholder(controlId, t(key));
  });

  [
    "name", "email", "phone", "gender", "age", "city", "website", "summary", "advantages",
    "school", "major", "graduation", "jobTarget", "expectedSalary", "techTags",
    "programmingLanguages", "webDevelopment", "databases", "devTools", "aiApplications", "selfEvaluation"
  ].forEach((fieldName) => {
    const keys = {
      name: "name", email: "email", phone: "phone", gender: "gender", age: "age", city: "city", website: "website",
      summary: "profile", advantages: "strengths", school: "school", major: "major", graduation: "graduationTime",
      jobTarget: "targetRole", expectedSalary: "expectedSalary", techTags: "skillTags",
      programmingLanguages: "programmingLanguages", webDevelopment: "webDevelopment", databases: "database",
      devTools: "developmentTools", aiApplications: "aiApplications", selfEvaluation: "selfEvaluation"
    };
    setLabelText(fieldName, t(keys[fieldName]));
  });

  [t("basicInfo"), t("education"), t("jobObjective"), t("skillCategory"), t("projects"), t("internships"), t("selfEvaluation")].forEach((value, index) => {
    setLegendText(index, value);
  });
  setText("#addProjectBtn", t("addProject"));
  setText("#addInternshipBtn", t("addInternship"));
}

function updatePreviewLanguageLabels() {
  const intentSection = preview.jobTargetSection.closest("section");
  const educationSection = preview.school.closest("section");
  const strengthsSection = preview.advantages.closest("section");
  const profileSection = preview.summary.closest("section");
  const skillsSection = preview.programmingLanguages.closest("section");
  const projectsSection = previewProjects.closest("section");
  const internshipSection = previewInternship.closest("section");

  intentSection.querySelector("h3").textContent = t("jobObjective");
  intentSection.querySelectorAll("strong")[0].textContent = t("targetRoleLabel");
  intentSection.querySelectorAll("strong")[1].textContent = t("targetCityLabel");
  intentSection.querySelectorAll("strong")[2].textContent = t("expectedSalaryLabel");
  educationSection.querySelector("h3").textContent = t("education");
  strengthsSection.querySelector("h3").textContent = t("strengths");
  profileSection.querySelector("h3").textContent = t("profile");
  skillsSection.querySelector("h3").textContent = t("professionalSkills");
  const skillLabels = [t("programmingLanguagesLabel"), t("webDevelopmentLabel"), t("databaseLabel"), t("developmentToolsLabel"), t("aiApplicationsLabel")];
  skillsSection.querySelectorAll("strong").forEach((element, index) => {
    element.textContent = skillLabels[index];
  });
  projectsSection.querySelector("h3").textContent = t("projects");
  internshipSection.querySelector("h3").textContent = t("internships");
  previewSelfEvaluationSection.querySelector("h3").textContent = t("selfEvaluation");
}

function updateLanguage() {
  updateStaticLanguage();
  updatePreviewLanguageLabels();
  renderAllExperienceForms();
  renderAdditionalModules();
  updatePreview();
  renderModuleOptions();
}

function updatePreview() {
  Object.keys(preview).forEach((fieldName) => {
    const sourceFieldName = fieldName.replace("Inline", "").replace("Section", "");
    preview[fieldName].textContent = getValue(sourceFieldName);
    preview[fieldName].classList.remove("preview-placeholder");
  });

  preview.graduation.textContent = formatGraduationLabel(getValue("graduation"));
  updatePreviewPlaceholders();
  updateTechTagsPreview();
  updateInlinePreviewLines();
  updateSectionVisibility();
  renderExperiencePreview(previewProjects, projectsData);
  renderExperiencePreview(previewInternship, internshipsData);
  renderAdditionalModulesPreview();
}

function setTextPlaceholder(element, text) {
  element.textContent = text;
  element.classList.add("preview-placeholder");
}

function setSectionPlaceholder(element, hasContent, placeholderText) {
  const section = element.closest("section");
  section.classList.toggle("is-placeholder-only", !hasContent);

  if (!hasContent) {
    setTextPlaceholder(element, placeholderText);
  } else {
    element.classList.remove("preview-placeholder");
  }
}

function updatePreviewPlaceholders() {
  if (!hasValue("name")) {
    setTextPlaceholder(preview.name, t("placeholderName"));
  }

  if (!hasValue("jobTarget")) {
    setTextPlaceholder(preview.jobTarget, t("placeholderJobTarget"));
  }
}

function updateInlinePreviewLines() {
  updateDelimitedLine(document.querySelector(".resume-meta-line"), t("placeholderBasicInfo"));
  updateDelimitedLine(document.querySelector(".resume-contact-line"), t("placeholderContact"));
}

function updateDelimitedLine(line, placeholderText) {
  const children = Array.from(line.children);
  let placeholder = line.querySelector(".line-placeholder");

  if (!placeholder) {
    placeholder = document.createElement("span");
    placeholder.className = "line-placeholder preview-placeholder";
    line.appendChild(placeholder);
  }

  children.forEach((child) => {
    if (child.classList.contains("divider") || child.classList.contains("line-placeholder")) {
      return;
    }

    child.hidden = child.textContent.trim() === "";
  });

  children.forEach((child, index) => {
    if (!child.classList.contains("divider")) {
      return;
    }

    const hasVisibleBefore = children.slice(0, index).some((item) => !item.classList.contains("divider") && !item.hidden);
    const hasVisibleAfter = children.slice(index + 1).some((item) => !item.classList.contains("divider") && !item.hidden);
    child.hidden = !hasVisibleBefore || !hasVisibleAfter;
  });

  const hasRealContent = children.some((child) => !child.classList.contains("divider") && !child.classList.contains("line-placeholder") && !child.hidden);
  placeholder.textContent = placeholderText;
  placeholder.hidden = hasRealContent;
  line.hidden = false;

  if (hasRealContent) {
    line.classList.remove("is-placeholder-only");
  } else {
    line.classList.add("is-placeholder-only");
  }
}

function updateAvatarPreview() {
  if (!avatarData) {
    previewAvatar.removeAttribute("src");
    previewAvatar.classList.remove("is-visible");
    return;
  }

  previewAvatar.src = avatarData;
  previewAvatar.classList.add("is-visible");
}

function updateTechTagsPreview() {
  const tags = splitTechTags(getValue("techTags")).slice(0, 10);

  previewTechTags.innerHTML = "";

  tags.forEach((tag) => {
    const tagElement = document.createElement("span");
    tagElement.textContent = tag;
    previewTechTags.appendChild(tagElement);
  });

  if (!tags.length) {
    const tagElement = document.createElement("span");
    tagElement.className = "preview-placeholder";
    tagElement.textContent = t("placeholderTechTags");
    previewTechTags.appendChild(tagElement);
  }

  previewTechTags.hidden = false;
}

function hasValue(fieldName) {
  return getValue(fieldName).length > 0;
}

function normalizeImportText(text) {
  return text
    .replace(/\r/g, "\n")
    .replace(/[：]/g, ":")
    .replace(/[•●▪]/g, "-")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function getImportLines(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function cleanImportedValue(value) {
  return String(value || "")
    .replace(/^[\s:：\-—|]+/, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function cleanPdfChineseSpacing(value) {
  return cleanImportedValue(value).replace(/([\u4e00-\u9fa5])[ \t]+(?=[\u4e00-\u9fa5])/g, "$1");
}

function normalizePdfImportText(text) {
  return cleanPdfChineseSpacing(text)
    .replace(/(github\s*\.?\s*com\s*\/\s*[A-Za-z0-9_-]+)\s*-\s*([A-Za-z0-9_-]+)/gi, "$1-$2")
    .replace(/(github\s*\.?\s*com\s*\/\s*[A-Za-z0-9_-]+)\s*\n\s*-\s*([A-Za-z0-9_-]+)/gi, "$1-$2");
}

function restoreSalaryRange(value) {
  return cleanImportedValue(value)
    .replace(/\b(\d+(?:\.\d+)?\s*[KkWw万])\s+(\d+(?:\.\d+)?\s*[KkWw万])\b/g, "$1-$2")
    .replace(/\s*-\s*/g, "-");
}

function restoreDateRange(value) {
  return cleanImportedValue(value)
    .replace(/\b((?:19|20)\d{2}[./年]\s*\d{1,2})\s+((?:19|20)\d{2}[./年]\s*\d{1,2})\b/g, "$1 - $2")
    .replace(/\s*(?:-|—|~|至)\s*/g, " - ");
}

function stripTrailingFieldLabels(value, labels) {
  const labelPattern = buildLabelPattern(labels);
  return cleanImportedValue(value).replace(new RegExp(`\\s*(?:${labelPattern})(?:\\s*[:：]|\\s).*$`, "i"), "");
}

function cleanImportedFieldValue(fieldName, value) {
  if (importedResumeSource !== "pdf") {
    return cleanImportedValue(value);
  }

  if (fieldName === "expectedSalary") {
    return restoreSalaryRange(value);
  }

  if (fieldName === "website") {
    return cleanWebsiteValue(value);
  }

  if (fieldName === "experienceDescription") {
    return cleanExperienceText(value, ["工作内容", "工作 内容", "项目描述", "项目 描述", "项目内容", "项目 内容"]);
  }

  if (fieldName === "experienceResult") {
    return cleanExperienceText(value, ["工作收获", "工作 收获", "实习收获", "实习 收获", "项目收获", "项目 收获", "项目成果", "项目 成果"]);
  }

  return cleanPdfChineseSpacing(value);
}

function splitTechTags(value) {
  const text = String(value || "").trim();

  if (!text) {
    return [];
  }

  const hasStrongSeparators = /[,，、;；\n/|｜]/.test(text);
  const splitter = hasStrongSeparators ? /[,，、;；\n/|｜]+/ : /\s+/;

  return uniqueList(text.split(splitter));
}

function normalizeLabel(label) {
  return String(label || "").replace(/[\s:：]/g, "").toLowerCase();
}

function matchesAnyLabel(label, labels) {
  const normalizedLabel = normalizeLabel(label);
  return labels.some((item) => normalizeLabel(item) === normalizedLabel);
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildLabelPattern(labels) {
  return labels
    .map((label) => escapeRegExp(label).replace(/\s+/g, "\\s*"))
    .join("|");
}

function getStrictFieldValue(text, labels) {
  const normalizedText = normalizeImportText(text);
  const stopLabels = uniqueList([
    ...fieldHeadings,
    "目标城市",
    "个人简介",
    "个人优势",
    "项目描述",
    "项目收获",
    "工作内容",
    "工作收获",
    "自我评价"
  ]);
  const labelPattern = buildLabelPattern(labels);
  const stopPattern = buildLabelPattern(stopLabels);
  const pattern = new RegExp(`(?:^|\\s)(?:${labelPattern})\\s*[:：]\\s*([\\s\\S]*?)(?=(?:\\s(?:${stopPattern})(?:\\s*[:：]|\\s))|$)`, "i");
  const match = normalizedText.match(pattern);

  return match ? cleanImportedValue(match[1]) : "";
}

function getFieldOrSectionText(text, labels) {
  return getStrictFieldValue(text, labels) || getStrictSectionText(text, labels);
}

function getStrictSingleLineValue(text, labels) {
  const blockValue = getStrictFieldValue(text, labels);

  if (!blockValue) {
    return "";
  }

  const firstLine = blockValue.split("\n").map(cleanImportedValue).find(Boolean) || "";
  const headingPattern = buildLabelPattern(topLevelHeadings);
  const headingMatch = firstLine.match(new RegExp(`\\s(?:${headingPattern})(?:\\s|$)`, "i"));
  const value = headingMatch ? firstLine.slice(0, headingMatch.index) : firstLine;

  return cleanImportedValue(value);
}

function parseLabeledLine(line) {
  const match = line.match(/^([^:：]{1,24})\s*[:：]\s*(.*)$/);

  if (!match) {
    return null;
  }

  return {
    label: match[1].trim(),
    value: cleanImportedValue(match[2])
  };
}

function isHeadingLine(line, headings = fieldHeadings) {
  const labeledLine = parseLabeledLine(line);

  if (labeledLine) {
    return matchesAnyLabel(labeledLine.label, headings);
  }

  return matchesAnyLabel(line, headings);
}

function findLabeledValue(lines, labels) {
  for (const line of lines) {
    const labeledLine = parseLabeledLine(line);

    if (labeledLine && matchesAnyLabel(labeledLine.label, labels) && labeledLine.value) {
      return labeledLine.value;
    }
  }

  return "";
}

function findFirstMatch(text, regex) {
  const match = text.match(regex);
  return match ? cleanImportedValue(match[1]) : "";
}

function isLikelyHeading(line) {
  return isHeadingLine(line, topLevelHeadings);
}

function inferName(lines) {
  const labeledName = findLabeledValue(lines, ["姓名", "名字", "Name"]);

  if (labeledName) {
    return labeledName.split(/[|｜,，\s]/)[0];
  }

  const firstLine = lines.find((line) => (
    /^[\u4e00-\u9fa5·]{2,6}$/.test(line) ||
    /^[A-Za-z][A-Za-z\s]{1,28}$/.test(line)
  ) && !isLikelyHeading(line));

  return firstLine || "";
}

function getSingleLineValue(text, lines, labels) {
  return getStrictSingleLineValue(text, labels) || findLabeledValue(lines, labels);
}

function getPdfJobTargetValue(text, lines) {
  const directValue = getSingleLineValue(text, lines, ["求职方向", "应聘岗位", "目标岗位", "意向岗位"]);

  if (directValue) {
    return stripTrailingFieldLabels(directValue, ["目标城市", "期望薪资", "薪资"]);
  }

  const directMatch = text.match(/求职方向\s*[:：]?\s*([\s\S]*?)(?=\s*(?:目标城市|期望薪资|薪资)(?:\s*[:：]|\s)|$)/);

  if (directMatch) {
    return stripTrailingFieldLabels(directMatch[1], ["目标城市", "期望薪资", "薪资"]);
  }

  const intentText = getSectionText(lines, ["求职意向"]);

  if (!intentText) {
    return "";
  }

  const labeledValue = getSingleLineValue(intentText, getImportLines(intentText), ["求职方向", "应聘岗位", "目标岗位", "意向岗位"]);
  const fallbackMatch = intentText.match(/求职方向\s*[:：]?\s*([\s\S]*?)(?=\s*(?:目标城市|期望薪资|薪资)(?:\s*[:：]|\s)|$)/);
  const value = labeledValue || (fallbackMatch ? fallbackMatch[1] : "");

  return stripTrailingFieldLabels(value, ["目标城市", "期望薪资", "薪资"]);
}

function getSectionText(lines, startKeywords) {
  const startIndex = lines.findIndex((line) => {
    const labeledLine = parseLabeledLine(line);

    if (labeledLine) {
      return startKeywords.some((keyword) => normalizeLabel(labeledLine.label).includes(normalizeLabel(keyword)));
    }

    const cleanLine = normalizeLabel(line);
    return startKeywords.some((keyword) => cleanLine.includes(normalizeLabel(keyword)));
  });

  if (startIndex === -1) {
    return "";
  }

  const sectionLines = [];
  const startLabel = parseLabeledLine(lines[startIndex]);

  if (startLabel && startLabel.value) {
    sectionLines.push(startLabel.value);
  }

  for (let index = startIndex + 1; index < lines.length; index += 1) {
    const line = lines[index];

    if (isLikelyHeading(line)) {
      break;
    }

    sectionLines.push(line);
  }

  return sectionLines.join("\n").trim();
}

function getStrictSectionText(text, startKeywords) {
  const normalizedText = normalizeImportText(text);
  const startPattern = buildLabelPattern(startKeywords);
  const startMatch = normalizedText.match(new RegExp(`(?:^|\\s)(?:${startPattern})(?:\\s|$|[:：])`, "i"));

  if (!startMatch) {
    return "";
  }

  const sectionStart = startMatch.index + startMatch[0].length;
  const restText = normalizedText.slice(sectionStart);
  const stopLabels = topLevelHeadings.filter((heading) => !startKeywords.some((keyword) => normalizeLabel(keyword) === normalizeLabel(heading)));
  const stopPattern = buildLabelPattern(stopLabels);
  const stopMatch = restText.match(new RegExp(`(?:^|\\s)(?:${stopPattern})(?:\\s|$|[:：])`, "i"));
  const sectionText = stopMatch ? restText.slice(0, stopMatch.index) : restText;

  return cleanImportedValue(sectionText);
}

function getFieldBlock(lines, labels, stopLabels = fieldHeadings) {
  const startIndex = lines.findIndex((line) => {
    const labeledLine = parseLabeledLine(line);
    return labeledLine
      ? matchesAnyLabel(labeledLine.label, labels)
      : matchesAnyLabel(line, labels);
  });

  if (startIndex === -1) {
    return "";
  }

  const blockLines = [];
  const startLabel = parseLabeledLine(lines[startIndex]);

  if (startLabel && startLabel.value) {
    blockLines.push(startLabel.value);
  }

  for (let index = startIndex + 1; index < lines.length; index += 1) {
    const line = lines[index];

    if (isHeadingLine(line, stopLabels)) {
      break;
    }

    blockLines.push(line);
  }

  return blockLines.join("\n").trim();
}

function uniqueList(values) {
  return Array.from(new Set(values.map((value) => cleanImportedValue(value)).filter(Boolean)));
}

function cleanSkillItem(item) {
  return cleanImportedValue(item)
    .replace(/^(技能|专业技能|技能特长|编程语言|web\s*开发|前端开发|数据库|开发工具|ai\s*应用)\s*[:：]?\s*/i, "")
    .replace(/^(熟悉|掌握|了解|使用|具备)\s*/, "")
    .trim();
}

function splitSkillCategoryItems(text) {
  return uniqueList(String(text || "")
    .split(/[\n,，、;；/|｜]+/)
    .map(cleanSkillItem))
    .filter((item) => !/^(技能|专业技能|技能特长|编程语言|web开发|前端开发|数据库|开发工具|ai应用)$/i.test(normalizeLabel(item)));
}

function getSkillCategoryKey(label) {
  const normalizedLabel = normalizeLabel(label);

  if (["编程语言", "语言"].includes(normalizedLabel)) {
    return "programmingLanguages";
  }

  if (["web开发", "前端开发", "web"].includes(normalizedLabel)) {
    return "webDevelopment";
  }

  if (normalizedLabel === "数据库") {
    return "databases";
  }

  if (normalizedLabel === "开发工具") {
    return "devTools";
  }

  if (["ai应用", "ai"].includes(normalizedLabel)) {
    return "aiApplications";
  }

  return "";
}

function getInlineSectionValue(text, labels, stopLabels) {
  const normalizedText = normalizeImportText(text);
  const labelPattern = buildLabelPattern(labels);
  const stopPattern = buildLabelPattern(stopLabels);
  const boundary = "[\\s,，、;；/|｜-]";
  const pattern = new RegExp(`(?:^|${boundary})(?:${labelPattern})(?:\\s*[:：]|\\s+)([\\s\\S]*?)(?=(?:${boundary}+(?:${stopPattern})(?:\\s*[:：]|\\s+))|$)`, "i");
  const match = normalizedText.match(pattern);

  return match ? cleanImportedValue(match[1]) : "";
}

function getSkillText(lines) {
  const sectionText = getFieldBlock(lines, ["专业技能", "技能特长", "技能"], topLevelHeadings);

  if (sectionText) {
    return sectionText;
  }

  const firstSkillIndex = lines.findIndex((line) => {
    const labeledLine = parseLabeledLine(line);
    return getSkillCategoryKey(labeledLine ? labeledLine.label : line);
  });

  if (firstSkillIndex === -1) {
    return "";
  }

  const skillLines = [];

  for (let index = firstSkillIndex; index < lines.length; index += 1) {
    if (index > firstSkillIndex && isLikelyHeading(lines[index])) {
      break;
    }

    skillLines.push(lines[index]);
  }

  return skillLines.join("\n").trim();
}

function getTechTagsText(lines) {
  const text = lines.join("\n");
  return getFieldOrSectionText(text, ["技术标签", "技能标签"]) || getFieldBlock(lines, ["技术标签", "技能标签"]);
}

async function extractPdfText(file) {
  if (!window.pdfjsLib || typeof window.pdfjsLib.getDocument !== "function") {
    throw new Error("PDF_LIBRARY_NOT_READY");
  }

  window.pdfjsLib.GlobalWorkerOptions.workerSrc = "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

  const arrayBuffer = await file.arrayBuffer();
  const loadingTask = window.pdfjsLib.getDocument({
    data: arrayBuffer,
    cMapUrl: "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/cmaps/",
    cMapPacked: true
  });
  const pdf = await loadingTask.promise;
  const pageTexts = [];
  const rawPageTexts = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum += 1) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const rawPageText = getPdfPageText(textContent.items);
    const pageText = mergePdfSplitLines(rawPageText);

    if (rawPageText) {
      rawPageTexts.push(rawPageText);
    }
    if (pageText) {
      pageTexts.push(pageText);
    }
  }

  const extractedText = pageTexts.join("\n\n").trim();
  console.log("PDF extracted raw text preview:", rawPageTexts.join("\n\n").trim().slice(0, 500));
  console.log("PDF extracted text preview:", extractedText.slice(0, 500));

  return extractedText;
}

function joinPdfLineItems(items) {
  return items
    .sort((a, b) => a.transform[4] - b.transform[4])
    .map((item) => item.str)
    .join(" ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function getPdfPageText(textItems) {
  const lines = [];

  textItems.forEach((item) => {
    const text = cleanImportedValue(item.str);

    if (!text) {
      return;
    }

    const y = Math.round(item.transform[5]);
    const existingLine = lines.find((line) => Math.abs(line.y - y) <= 2);

    if (existingLine) {
      existingLine.items.push(item);
    } else {
      lines.push({ y, items: [item] });
    }
  });

  return lines
    .sort((a, b) => b.y - a.y)
    .map((line) => joinPdfLineItems(line.items))
    .filter(Boolean)
    .join("\n");
}

function shouldMergePdfLines(previousLine, currentLine) {
  if (!previousLine || !currentLine) {
    return false;
  }

  if (isHeadingLine(previousLine) || isHeadingLine(currentLine)) {
    return false;
  }

  if (/[:：]$/.test(previousLine)) {
    return false;
  }

  const previousEnd = previousLine.slice(-1);
  const currentStart = currentLine.charAt(0);
  const previousIsCjk = /[\u4e00-\u9fa5]/.test(previousEnd);
  const currentIsCjk = /[\u4e00-\u9fa5]/.test(currentStart);
  const previousIsAscii = /[A-Za-z0-9]/.test(previousEnd);

  if (previousIsCjk && currentIsCjk && (previousLine.length <= 8 || currentLine.length <= 6)) {
    return true;
  }

  if (previousIsAscii && currentIsCjk && currentLine.length <= 6) {
    return true;
  }

  return false;
}

function mergePdfSplitLines(text) {
  const mergedLines = [];

  text.split("\n").map(cleanImportedValue).filter(Boolean).forEach((line) => {
    const previousLine = mergedLines[mergedLines.length - 1];

    if (shouldMergePdfLines(previousLine, line)) {
      const needsSpace = /[A-Za-z0-9]$/.test(previousLine) && /[\u4e00-\u9fa5]/.test(line.charAt(0));
      mergedLines[mergedLines.length - 1] = `${previousLine}${needsSpace ? " " : ""}${line}`;
    } else {
      mergedLines.push(line);
    }
  });

  return mergedLines.join("\n");
}

function classifySkills(skillText) {
  const categoryItems = {
    programmingLanguages: [],
    webDevelopment: [],
    databases: [],
    devTools: [],
    aiApplications: []
  };
  const skillCategoryLabels = {
    programmingLanguages: ["编程语言", "语言"],
    webDevelopment: ["Web开发", "Web 开发", "前端开发", "Web"],
    databases: ["数据库"],
    devTools: ["开发工具"],
    aiApplications: ["AI应用", "AI 应用"]
  };
  const allSkillCategoryLabels = Object.values(skillCategoryLabels).flat();
  const generalSkillLines = [];
  let currentCategory = "";

  Object.entries(skillCategoryLabels).forEach(([fieldName, labels]) => {
    const value = getInlineSectionValue(skillText, labels, allSkillCategoryLabels);

    if (value) {
      categoryItems[fieldName].push(...splitSkillCategoryItems(value));
    }
  });

  getImportLines(skillText).forEach((line) => {
    const labeledLine = parseLabeledLine(line);
    const plainCategoryKey = getSkillCategoryKey(line);
    const labeledCategoryKey = labeledLine ? getSkillCategoryKey(labeledLine.label) : "";
    const categoryKey = labeledCategoryKey || plainCategoryKey;

    if (categoryKey) {
      currentCategory = categoryKey;

      if (labeledLine && labeledLine.value) {
        categoryItems[categoryKey].push(...splitSkillCategoryItems(labeledLine.value));
      }

      return;
    }

    if (currentCategory) {
      categoryItems[currentCategory].push(...splitSkillCategoryItems(line));
    } else {
      generalSkillLines.push(line);
    }
  });

  const tokens = uniqueList([
    ...Object.values(categoryItems).flat(),
    ...splitTechTags(generalSkillLines.join("、"))
  ]);
  const languageKeywords = ["JavaScript", "TypeScript", "Python", "Java", "C++", "C#", "Go", "PHP", "HTML", "CSS", "SQL"];
  const webKeywords = ["Vue", "React", "Angular", "Node.js", "Node", "Express", "UniApp", "微信小程序", "Webpack", "Vite", "Element", "Ant Design", "Tailwind"];
  const databaseKeywords = ["MySQL", "MongoDB", "Redis", "PostgreSQL", "SQLite", "Oracle"];
  const toolKeywords = ["Git", "GitHub", "VS Code", "Chrome DevTools", "DevTools", "Cursor", "Figma", "Postman", "Docker", "Linux", "Jenkins", "Axure"];
  const aiKeywords = ["ChatGPT", "AI API", "AIGC", "Prompt", "Cursor", "Copilot", "Midjourney", "Stable Diffusion"];

  const includesKeyword = (token, keywords) => keywords.some((keyword) => token.toLowerCase().includes(keyword.toLowerCase()));
  const mergeItems = (fieldName, keywords) => {
    if (categoryItems[fieldName].length) {
      return uniqueList(categoryItems[fieldName]).join("、");
    }

    return uniqueList(tokens.filter((token) => includesKeyword(token, keywords))).join("、");
  };

  return {
    programmingLanguages: mergeItems("programmingLanguages", languageKeywords),
    webDevelopment: mergeItems("webDevelopment", webKeywords),
    databases: mergeItems("databases", databaseKeywords),
    devTools: mergeItems("devTools", toolKeywords),
    aiApplications: mergeItems("aiApplications", aiKeywords)
  };
}

function parseExperienceBlocks(experienceText, type) {
  if (!experienceText) {
    return [];
  }

  const titleLabels = type === "project" ? ["项目名称", "项目"] : ["公司名称", "公司", "实习单位"];
  const roleLabels = type === "project" ? ["担任角色", "角色", "职责"] : ["岗位", "实习岗位", "职位"];
  const rawBlocks = experienceText
    .split(/\n\s*\n|(?=\n?(?:项目名称|项目|公司名称|公司|实习单位)\s*[:：])/)
    .map((block) => block.trim())
    .filter(Boolean);

  const blocks = rawBlocks.length > 1 ? rawBlocks : [experienceText];

  return blocks.slice(0, 4).map((block) => {
    const lines = getImportLines(block);
    const descriptionLabels = type === "project" ? ["项目描述", "项目内容", "职责"] : ["工作内容", "实习内容", "职责"];
    const resultLabels = type === "project" ? ["项目收获", "项目成果", "成果"] : ["工作收获", "实习收获", "收获"];
    const readBlockValue = (labels) => getStrictSingleLineValue(block, labels) || findLabeledValue(lines, labels) || getFieldBlock(lines, labels).split("\n")[0] || "";
    const name = readBlockValue(titleLabels) || cleanImportedValue(lines[0] || "").replace(/^[-\d.、\s]+/, "");
    const role = readBlockValue(roleLabels);
    const time = readBlockValue(["时间"]) || findFirstMatch(block, /((?:20\d{2}|19\d{2})[./年-]\s?\d{0,2}\s*(?:(?:-|至|~|—)\s*)?(?:20\d{2}|至今|现在|目前)[./年]?\s?\d{0,2})/);
    const description = getStrictFieldValue(block, descriptionLabels) || lines
      .filter((line) => line !== lines[0] && !/^(项目名称|项目|公司名称|公司|实习单位|担任角色|角色|职责|岗位|实习岗位|职位|时间|项目描述|项目内容|工作内容|实习内容|项目收获|项目成果|工作收获|实习收获)\s*[:：]/.test(line))
      .join("\n");
    const result = getStrictFieldValue(block, resultLabels);

    return {
      name: cleanImportedFieldValue("experienceName", name),
      role: cleanImportedFieldValue("experienceRole", role),
      time: importedResumeSource === "pdf" ? restoreDateRange(time) : cleanImportedValue(time),
      description: cleanImportedFieldValue("experienceDescription", description),
      result: cleanImportedFieldValue("experienceResult", result)
    };
  }).filter((item) => item.name || item.description);
}

function fillRecognizedField(fieldName, value) {
  const cleanValue = cleanImportedFieldValue(fieldName, value);

  if (!cleanValue || !fields[fieldName]) {
    return false;
  }

  fields[fieldName].value = cleanValue;
  return true;
}

function extractAge(value) {
  const match = String(value || "").match(/(\d{1,2}\s*岁?)/);
  return match ? cleanImportedValue(match[1]) : "";
}

function extractGender(value) {
  const match = String(value || "").match(/(男|女|Male|Female)/i);
  return match ? cleanImportedValue(match[1]) : "";
}

function extractCity(value) {
  return cleanImportedValue(String(value || "").split(/[|｜,，;；]/)[0]);
}

function cleanWebsiteValue(value) {
  return cleanImportedValue(value)
    .replace(/\s*-\s*/g, "-")
    .replace(/\s*\/\s*/g, "/")
    .replace(/\s*\.\s*/g, ".")
    .replace(/\s+/g, "");
}

function getPdfGithubValue(text) {
  const normalizedText = normalizePdfImportText(text);
  const match = normalizedText.match(/github\s*\.?\s*com\s*\/\s*[A-Za-z0-9_-]+(?:\s*\/\s*[A-Za-z0-9._-]+)*/i);
  return match ? cleanWebsiteValue(match[0]) : "";
}

function getWebsiteValue(text, lines) {
  if (importedResumeSource === "pdf") {
    const pdfGithubValue = getPdfGithubValue(text);

    if (pdfGithubValue) {
      return pdfGithubValue;
    }
  }

  return getSingleLineValue(text, lines, ["Github", "GitHub", "个人网站", "网站", "主页", "Website"]) || extractWebsite(lines, text);
}

function extractPhone(lines, text) {
  const labeledPhone = findLabeledValue(lines, ["电话", "手机", "联系方式", "Tel", "Phone"]);

  if (labeledPhone) {
    return cleanImportedValue(labeledPhone.replace(/[^\d+()\-\s]/g, ""));
  }

  return findFirstMatch(text, /(?:电话|手机|联系方式|Tel|Phone)?\s*[:：]?\s*(\+?\d[\d\s()\-]{6,}\d)/i);
}

function extractWebsite(lines, text) {
  const labeledWebsite = findLabeledValue(lines, ["Github", "GitHub", "个人网站", "网站", "主页", "Website"]);

  if (labeledWebsite) {
    return labeledWebsite;
  }

  const socialLink = findFirstMatch(text, /((?:https?:\/\/)?(?:www\.)?(?:github\.com|gitlab\.com|gitee\.com|linkedin\.com)(?:\/[^\s，,；;|｜]*)?)/i);

  if (socialLink) {
    return socialLink;
  }

  const websiteLine = lines.find((line) => /https?:\/\/|www\./i.test(line) && !line.includes("@"));
  return websiteLine ? findFirstMatch(websiteLine, /((?:https?:\/\/)?(?:www\.)?[\w.-]+\.[a-z]{2,}(?:\/[^\s，,；;|｜]*)?)/i) : "";
}

function inferBasicInfo(lines) {
  const cityNames = ["北京", "上海", "广州", "深圳", "杭州", "南京", "成都", "武汉", "西安", "苏州", "天津", "重庆", "长沙", "郑州", "青岛", "厦门", "合肥", "福州", "Sydney", "Melbourne"];
  const info = {
    gender: "",
    age: "",
    city: ""
  };

  lines.slice(0, 8).forEach((line) => {
    const roughTokens = line.split(/[|｜,，;；]/);
    const tokens = (roughTokens.length > 1 ? roughTokens : line.split(/\s+/))
      .map(cleanImportedValue)
      .filter(Boolean);

    tokens.forEach((token) => {
      if (!info.gender) {
        info.gender = extractGender(token);
      }

      if (!info.age) {
        info.age = extractAge(token);
      }

      if (!info.city && !/(大学|学院|学校|专业|University|College|@|1[3-9]\d{9})/i.test(token)) {
        const matchedCity = cityNames.find((cityName) => token.toLowerCase().includes(cityName.toLowerCase()));

        if (matchedCity || /[\u4e00-\u9fa5]{2,}市$/.test(token)) {
          info.city = token;
        }
      }
    });
  });

  return info;
}

function clearFormBeforeImportedFill() {
  Object.values(fields).forEach((field) => {
    field.value = "";
  });

  avatarData = "";
  projectsData = [];
  internshipsData = [];
  renderAllExperienceForms();
  updateAvatarPreview();
}

function smartFillFromResumeText() {
  let text = normalizeImportText(resumeImportText.value);

  if (importedResumeSource === "pdf") {
    text = normalizePdfImportText(text);
  }

  if (!text) {
    importStatus.textContent = t("noImportText");
    return;
  }

  const lines = getImportLines(text);
  const shouldClearBeforeFill = Boolean(importedResumeSource);
  const isFileImport = Boolean(importedResumeSource);

  if (shouldClearBeforeFill) {
    clearFormBeforeImportedFill();
  }

  const phone = getSingleLineValue(text, lines, ["电话", "手机", "联系方式", "Tel", "Phone"]);
  const email = getSingleLineValue(text, lines, ["邮箱", "Email", "E-mail"]) || findFirstMatch(text, /([A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,})/i);
  const website = getWebsiteValue(text, lines);
  const gender = extractGender(getSingleLineValue(text, lines, ["性别", "Gender"]));
  const age = extractAge(getSingleLineValue(text, lines, ["年龄", "Age"]));
  const city = extractCity(getSingleLineValue(text, lines, ["城市", "所在地", "现居地", "目标城市", "City"]));
  const school = getSingleLineValue(text, lines, ["学校", "毕业院校", "院校", "School", "University", "College"]);
  const major = getSingleLineValue(text, lines, ["专业", "Major"]);
  const graduation = getSingleLineValue(text, lines, ["毕业时间", "预计毕业时间", "毕业年份", "Graduation", "Graduation Date"]);
  const jobTarget = importedResumeSource === "pdf"
    ? getPdfJobTargetValue(text, lines)
    : getSingleLineValue(text, lines, ["求职方向", "求职意向", "应聘岗位", "目标岗位", "意向岗位"]);
  const expectedSalary = getSingleLineValue(text, lines, ["期望薪资", "薪资", "Salary"]);
  const advantages = getFieldOrSectionText(text, ["个人优势"]);
  const summary = getFieldOrSectionText(text, ["个人简介"]);
  const selfEvaluation = getFieldOrSectionText(text, ["自我评价"]);
  const skillText = getFieldOrSectionText(text, ["专业技能", "技能特长", "技能"]) || getSkillText(lines);
  const parsedSkills = skillText ? classifySkills(skillText) : {};
  const importedTechTags = getTechTagsText(lines);
  const projectText = getStrictSectionText(text, ["项目经历", "项目经验"]) || getSectionText(lines, ["项目经历", "项目经验"]);
  const internshipText = getStrictSectionText(text, ["实习经历", "工作经历"]) || getSectionText(lines, ["实习经历", "工作经历"]);
  const parsedProjects = parseExperienceBlocks(projectText, "project");
  const parsedInternships = parseExperienceBlocks(internshipText, "internship");

  let filledCount = 0;
  const fieldValues = {
    name: getSingleLineValue(text, lines, ["姓名", "名字", "Name"]),
    gender,
    age,
    city,
    school,
    major,
    graduation,
    jobTarget,
    phone,
    email,
    website,
    expectedSalary,
    advantages,
    summary,
    techTags: splitTechTags(importedTechTags).join("、"),
    programmingLanguages: parsedSkills.programmingLanguages,
    webDevelopment: parsedSkills.webDevelopment,
    databases: parsedSkills.databases,
    devTools: parsedSkills.devTools,
    aiApplications: parsedSkills.aiApplications,
    selfEvaluation
  };

  const parsedFormData = {
    ...Object.fromEntries(Object.entries(fieldValues).map(([fieldName, value]) => [fieldName, cleanImportedFieldValue(fieldName, value)])),
    projects: parsedProjects,
    internships: parsedInternships
  };

  console.log(importedResumeSource === "pdf" ? "PDF parsed formData:" : "Smart fill parsed formData:", parsedFormData);

  Object.entries(fieldValues).forEach(([fieldName, value]) => {
    if (fillRecognizedField(fieldName, value)) {
      filledCount += 1;
    }
  });

  let shouldRenderExperienceForms = false;

  if (parsedProjects.length) {
    projectsData = parsedProjects;
    shouldRenderExperienceForms = true;
    filledCount += 1;
  }

  if (parsedInternships.length) {
    internshipsData = parsedInternships;
    shouldRenderExperienceForms = true;
    filledCount += 1;
  }

  if (shouldRenderExperienceForms) {
    renderAllExperienceForms();
  }

  updatePreview();
  saveResumeData();

  if (importedResumeSource === "pdf" && filledCount) {
    const missingCoreFields = ["name", "school", "major", "graduation"].some((fieldName) => !fields[fieldName].value.trim());
    importStatus.textContent = missingCoreFields ? t("pdfIncomplete") : t("fillSuccess");
    showToast(t("smartFillReview"));
    return;
  }

  importStatus.textContent = filledCount ? t("fillSuccess") : (isFileImport ? t("noFileFillContent") : t("noFillContent"));

  if (filledCount) {
    showToast(t("smartFillReview"));
  }
}

async function importResumeFile(file = resumeFileInput.files[0]) {

  if (!file) {
    return;
  }

  const fileName = file.name.toLowerCase();
  const isTxtFile = fileName.endsWith(".txt") || file.type === "text/plain";
  const isDocxFile = fileName.endsWith(".docx") || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  const isPdfFile = fileName.endsWith(".pdf") || file.type === "application/pdf";

  if (!isTxtFile && !isDocxFile && !isPdfFile) {
    resumeFileInput.value = "";
    showImportErrorMessage(t("unsupportedFile"));
    return;
  }

  hideImportErrorMessage();

  if (isDocxFile) {
    if (!window.mammoth || typeof window.mammoth.extractRawText !== "function") {
      resumeFileInput.value = "";
      resumeFileName.textContent = "";
      importedResumeSource = "";
      importStatus.textContent = t("docxLibraryFailed");
      return;
    }

    try {
      importStatus.textContent = t("readingDocx");
      const arrayBuffer = await file.arrayBuffer();
      const result = await window.mammoth.extractRawText({ arrayBuffer });

      resumeImportText.value = String(result.value || "").trim();
      resumeFileName.textContent = file.name;
      importedResumeSource = "docx";
      importStatus.textContent = resumeImportText.value ? t("fileImported") : t("docxEmpty");
      closeImportModal();
    } catch (error) {
      resumeFileName.textContent = "";
      importedResumeSource = "";
      importStatus.textContent = t("docxReadFailed");
    }

    return;
  }

  if (isPdfFile) {
    try {
      importStatus.textContent = t("readingPdf");
      const text = await extractPdfText(file);

      if (!text) {
        resumeFileName.textContent = "";
        resumeImportText.value = "";
        resumeFileInput.value = "";
        importedResumeSource = "";
        importStatus.textContent = t("pdfUnrecognized");
        showImportErrorMessage(t("pdfUnrecognized"));
        return;
      }

      resumeImportText.value = text;
      resumeFileName.textContent = file.name;
      importedResumeSource = "pdf";
      importStatus.textContent = t("fileImported");
      closeImportModal();
    } catch (error) {
      resumeFileName.textContent = "";
      resumeImportText.value = "";
      resumeFileInput.value = "";
      importedResumeSource = "";
      importStatus.textContent = t("pdfUnrecognized");
      showImportErrorMessage(t("pdfUnrecognized"));
    }

    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    resumeImportText.value = String(reader.result || "");
    resumeFileName.textContent = file.name;
    importedResumeSource = "txt";
    importStatus.textContent = t("fileImported");
    closeImportModal();
  });

  reader.addEventListener("error", () => {
    resumeFileName.textContent = "";
    importedResumeSource = "";
    importStatus.textContent = t("fileReadFailed");
  });

  reader.readAsText(file, "UTF-8");
}

function toggleSection(element, isVisible) {
  element.closest("section").classList.toggle("is-placeholder-only", !isVisible);
}

function toggleSkillRow(element, isVisible) {
  element.closest("p").classList.toggle("is-hidden", !isVisible);
}

function updateSectionVisibility() {
  const hasJobIntent = hasValue("jobTarget") || hasValue("city") || hasValue("expectedSalary");
  const hasEducation = hasValue("school") || hasValue("major") || hasValue("graduation");
  const hasAdvantages = hasValue("advantages");
  const hasSummary = hasValue("summary");
  const hasSelfEvaluation = hasValue("selfEvaluation");

  const skillFields = [
    ["programmingLanguages", preview.programmingLanguages],
    ["webDevelopment", preview.webDevelopment],
    ["databases", preview.databases],
    ["devTools", preview.devTools],
    ["aiApplications", preview.aiApplications]
  ];
  const hasSkills = skillFields.some(([fieldName]) => hasValue(fieldName));

  toggleSection(preview.jobTargetSection, hasJobIntent);
  if (!hasJobIntent) {
    setTextPlaceholder(preview.jobTargetSection, t("placeholderIntent"));
  } else {
    preview.jobTargetSection.classList.remove("preview-placeholder");
  }
  preview.jobTargetSection.closest("p").hidden = !hasValue("jobTarget") && hasJobIntent;
  preview.citySection.closest("p").hidden = !hasValue("city");
  preview.expectedSalary.closest("p").hidden = !hasValue("expectedSalary");
  toggleSection(preview.school, hasEducation);
  setSectionPlaceholder(preview.school, hasEducation, t("placeholderEducation"));
  toggleSection(preview.advantages, hasAdvantages);
  setSectionPlaceholder(preview.advantages, hasAdvantages, t("placeholderStrengths"));
  toggleSection(preview.summary, hasSummary);
  setSectionPlaceholder(preview.summary, hasSummary, t("placeholderProfile"));
  toggleSection(preview.programmingLanguages, hasSkills);
  updateSkillPlaceholders(hasSkills);
  toggleSection(preview.selfEvaluation, hasSelfEvaluation);
  setSectionPlaceholder(preview.selfEvaluation, hasSelfEvaluation, t("placeholderSelfEvaluation"));

  skillFields.forEach(([fieldName, element]) => {
    toggleSkillRow(element, hasValue(fieldName));
  });
}

function updateSkillPlaceholders(hasSkills) {
  const skillSection = preview.programmingLanguages.closest("section");
  const skillGroups = skillSection.querySelector(".resume-skill-groups");
  let placeholder = skillGroups.querySelector(".skill-placeholder");

  if (!placeholder) {
    placeholder = document.createElement("p");
    placeholder.className = "skill-placeholder preview-placeholder";
    skillGroups.appendChild(placeholder);
  }

  placeholder.textContent = t("placeholderSkills");
  placeholder.hidden = hasSkills;
}

function updateTemplateSelection() {
  templateRadios.forEach((radio) => {
    radio.closest(".template-card").classList.toggle("is-selected", radio.checked);

    if (radio.checked) {
      selectedTemplate = radio.value;
    }
  });

  if (!templateNames.includes(selectedTemplate)) {
    selectedTemplate = "classic";
  }

  resumePreview.classList.remove("template-classic", "template-modern", "template-minimal");
  resumePreview.classList.add(`template-${selectedTemplate}`);
}

function createEmptyExperience(type) {
  return {
    name: "",
    role: "",
    time: "",
    description: "",
    result: ""
  };
}

function normalizeExperienceList(value, legacyText = "") {
  if (Array.isArray(value)) {
    const normalizedList = value.map((item) => ({
      name: item.name || "",
      role: item.role || "",
      time: item.time || "",
      description: item.description || "",
      result: item.result || item.gain || ""
    }));

    if (isLegacyDefaultExperienceList(normalizedList)) {
      return [];
    }

    return normalizedList;
  }

  if (legacyText && typeof legacyText === "string") {
    return [{
      name: "",
      role: "",
      time: "",
      description: legacyText,
      result: ""
    }];
  }

  return [];
}

function isLegacyDefaultExperienceList(items) {
  const names = items.map((item) => item.name).filter(Boolean);
  const descriptionText = items.map((item) => item.description).join("\n");
  const hasLegacySnippet = legacyDefaultSnippets.some((snippet) => descriptionText.includes(snippet));

  if (names.length === legacyDefaultProjectNames.length && names.every((name, index) => name === legacyDefaultProjectNames[index]) && hasLegacySnippet) {
    return true;
  }

  return names.length === legacyDefaultInternshipNames.length && names[0] === legacyDefaultInternshipNames[0] && hasLegacySnippet;
}

function getExperienceTypeLabel(type) {
  if (type === "project") {
    return {
      item: t("itemProject"),
      name: currentLanguage === "en" ? "Project Name" : "项目名称",
      role: currentLanguage === "en" ? "Role" : "担任角色",
      description: t("projectDescriptionLabel").replace(/[：:]$/, ""),
      result: t("projectOutcomeLabel").replace(/[：:]$/, ""),
      namePlaceholder: currentLanguage === "en" ? "e.g. Campus marketplace" : "例如：校园二手交易平台",
      rolePlaceholder: currentLanguage === "en" ? "e.g. Frontend Developer" : "例如：前端开发"
    };
  }

  if (type === "work") {
    return {
      item: t("itemWork"),
      name: t("companyName"),
      role: t("role"),
      description: t("responsibilitiesLabel").replace(/[：:]$/, ""),
      result: t("workOutcomeLabel").replace(/[：:]$/, ""),
      namePlaceholder: currentLanguage === "en" ? "e.g. Example Technology Co., Ltd." : "例如：某某科技有限公司",
      rolePlaceholder: currentLanguage === "en" ? "e.g. Product Assistant" : "例如：产品助理"
    };
  }

  return {
    item: t("itemInternship"),
    name: t("companyName"),
    role: t("role"),
    description: t("responsibilitiesLabel").replace(/[：:]$/, ""),
    result: t("workOutcomeLabel").replace(/[：:]$/, ""),
    namePlaceholder: currentLanguage === "en" ? "e.g. Example Technology Co., Ltd." : "例如：某某科技有限公司",
    rolePlaceholder: currentLanguage === "en" ? "e.g. Frontend Intern" : "例如：前端实习生"
  };
}

function renderExperienceForm(container, items, type) {
  container.innerHTML = "";
  const labels = getExperienceTypeLabel(type);

  items.forEach((item, index) => {
    const itemElement = document.createElement("div");
    itemElement.className = "experience-editor";
    itemElement.innerHTML = `
      <div class="experience-editor-head">
        <strong>${labels.item} ${index + 1}</strong>
        <button class="remove-item-btn" type="button" data-type="${type}" data-index="${index}">${t("remove")}</button>
      </div>
      <label>
        ${labels.name}
        <input type="text" value="${escapeAttribute(item.name)}" data-type="${type}" data-index="${index}" data-field="name" placeholder="${labels.namePlaceholder}">
      </label>
      <label>
        ${labels.role}
        <input type="text" value="${escapeAttribute(item.role)}" data-type="${type}" data-index="${index}" data-field="role" placeholder="${labels.rolePlaceholder}">
      </label>
      <label>
        ${t("time")}
        <input type="text" value="${escapeAttribute(item.time)}" data-type="${type}" data-index="${index}" data-field="time" placeholder="${currentLanguage === "en" ? "e.g. 2025.03 - 2025.06" : "例如：2025.03 - 2025.06"}">
      </label>
      <label class="field-full">
        ${labels.description}
        <textarea rows="4" data-type="${type}" data-index="${index}" data-field="description" placeholder="${currentLanguage === "en" ? "Write project description, responsibilities, and outcomes" : "用 2-4 条写清楚背景、职责和产出"}">${escapeHtml(item.description)}</textarea>
      </label>
      <label class="field-full">
        ${labels.result}
        <textarea rows="3" data-type="${type}" data-index="${index}" data-field="result" placeholder="${currentLanguage === "en" ? "Summarize outcomes, learning, and growth" : "总结你的成长、复盘和能力提升"}">${escapeHtml(item.result || "")}</textarea>
      </label>
    `;

    container.appendChild(itemElement);
  });
}

function renderAllExperienceForms() {
  renderExperienceForm(projectItems, projectsData, "project");
  renderExperienceForm(internshipItems, internshipsData, "internship");
}

function renderExperiencePreview(container, items, type = container === previewProjects ? "project" : "internship") {
  const visibleItems = items.filter((item) => item.name || item.role || item.time || item.description || item.result);

  if (!visibleItems.length) {
    const placeholderText = type === "project" ? t("placeholderProjects") : type === "work" ? t("placeholderWork") : t("placeholderInternships");
    container.innerHTML = `<p class="preview-placeholder">${placeholderText}</p>`;
    container.closest("section").classList.add("is-placeholder-only");
    return;
  }

  container.closest("section").classList.remove("is-placeholder-only");
  container.innerHTML = "";

  visibleItems.forEach((item) => {
    const itemElement = document.createElement("article");
    itemElement.className = "resume-experience-item";

    const title = [item.name, item.role].filter(Boolean).join("｜");
    const time = item.time || "";
    const descriptionLabel = type === "project" ? t("projectDescriptionLabel") : t("responsibilitiesLabel");
    const resultLabel = type === "project" ? t("projectOutcomeLabel") : t("workOutcomeLabel");
    const descriptionText = stripExperiencePreviewLabel(item.description, descriptionLabel);
    const resultText = stripExperiencePreviewLabel(item.result, resultLabel);

    itemElement.innerHTML = `
      <div class="resume-experience-head">
        <strong>${escapeHtml(title)}</strong>
        <span>${escapeHtml(time)}</span>
      </div>
      ${descriptionText ? `<p><strong>${descriptionLabel}</strong>${escapeHtml(descriptionText)}</p>` : ""}
      ${resultText ? `<p class="resume-experience-result"><strong>${resultLabel}</strong>${escapeHtml(resultText)}</p>` : ""}
    `;

    container.appendChild(itemElement);
  });
}

function stripExperiencePreviewLabel(value, label) {
  const cleanValue = cleanExperienceText(value, [label]);
  const plainLabel = label.replace(/[：:]\s*$/, "");
  const looseLabel = escapeRegExp(plainLabel).replace(/\\ /g, "\\s*").replace(/([\u4e00-\u9fa5])/g, "$1\\s*");
  const pattern = new RegExp(`^${looseLabel}[:：]?\\s*`);

  return cleanValue.replace(pattern, "");
}

function cleanExperienceText(value, labels = []) {
  let cleanValue = cleanPdfChineseSpacing(value);

  labels.forEach((label) => {
    const plainLabel = label.replace(/[：:]\s*$/, "");
    const compactLabel = plainLabel.replace(/\s+/g, "");
    const looseLabel = Array.from(compactLabel).map((char) => `${escapeRegExp(char)}\\s*`).join("");
    cleanValue = cleanValue.replace(new RegExp(`^${looseLabel}[:：]?\\s*`, "i"), "");
  });

  return cleanPdfChineseSpacing(cleanValue);
}

function normalizeAddedModules(value) {
  const normalized = {};

  if (!value || typeof value !== "object") {
    return normalized;
  }

  moduleDefinitions.forEach((definition) => {
    if (definition.existing || !value[definition.key]) {
      return;
    }

    const moduleValue = value[definition.key];
    normalized[definition.key] = {
      title: moduleValue.title || t(definition.titleKey),
      content: moduleValue.content || ""
    };
  });

  return normalized;
}

function isModuleAdded(key) {
  return key === "work" ? Boolean(addedModules.work) : Boolean(addedModules[key]);
}

function getModuleElement(key) {
  return document.querySelector(`[data-module-key="${key}"]`) || document.getElementById(moduleMap[key]?.targetId);
}

function scrollToModule(key) {
  const target = getModuleElement(key);

  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderModuleOptions() {
  moduleOptions.innerHTML = moduleDefinitions.map((definition) => `
    <button class="module-option-btn" type="button" data-module-key="${definition.key}">+ ${t(definition.titleKey)}</button>
  `).join("");
}

function createAddedModule(key) {
  const definition = moduleMap[key];

  if (!definition || definition.existing) {
    return null;
  }

  return {
    title: t(definition.titleKey),
    content: ""
  };
}

function addModule(key) {
  const definition = moduleMap[key];

  if (!definition) {
    return;
  }

  if (definition.existing || isModuleAdded(key)) {
    closeModuleModal();
    scrollToModule(key);
    showToast(t("moduleExists"));
    return;
  }

  addedModules[key] = createAddedModule(key);

  if (key === "work" && !workData.length) {
    workData = [createEmptyExperience("work")];
  }

  closeModuleModal();
  renderAdditionalModules();
  updatePreview();
  saveResumeData();
  scrollToModule(key);
}

function renderAdditionalModules() {
  additionalModulesContainer.innerHTML = "";

  Object.keys(addedModules).forEach((key) => {
    const definition = moduleMap[key];

    if (!definition) {
      return;
    }

    if (key === "work") {
      renderWorkModule();
      return;
    }

    if (definition.type === "custom") {
      renderCustomModule(key);
      return;
    }

    renderSimpleModule(key);
  });
}

function renderSimpleModule(key) {
  const definition = moduleMap[key];
  const moduleData = addedModules[key];
  const fieldElement = document.createElement("fieldset");
  fieldElement.className = "form-step";
  fieldElement.dataset.moduleKey = key;
  const control = definition.type === "input"
    ? `<input type="text" value="${escapeAttribute(moduleData.content)}" data-module-field="content" data-module-key="${key}" placeholder="${currentLanguage === "en" ? "Enter a link or text" : "填写链接或文本"}">`
    : `<textarea rows="4" data-module-field="content" data-module-key="${key}" placeholder="${currentLanguage === "en" ? "Fill in this section" : "填写模块内容"}">${escapeHtml(moduleData.content)}</textarea>`;

  fieldElement.innerHTML = `
    <legend>
      <span>+</span>
      <strong>${escapeHtml(t(definition.titleKey))}</strong>
    </legend>
    <label class="field-full">
      ${escapeHtml(t(definition.titleKey))}
      ${control}
    </label>
  `;
  additionalModulesContainer.appendChild(fieldElement);
}

function renderCustomModule(key) {
  const moduleData = addedModules[key];
  const fieldElement = document.createElement("fieldset");
  fieldElement.className = "form-step";
  fieldElement.dataset.moduleKey = key;
  fieldElement.innerHTML = `
    <legend>
      <span>+</span>
      <strong>${escapeHtml(t("customSection"))}</strong>
    </legend>
    <label>
      ${currentLanguage === "en" ? "Section Title" : "模块标题"}
      <input type="text" value="${escapeAttribute(moduleData.title === "自定义模块" ? "" : moduleData.title)}" data-module-field="title" data-module-key="${key}" placeholder="${currentLanguage === "en" ? "e.g. Languages" : "例如：语言能力"}">
    </label>
    <label class="field-full">
      ${currentLanguage === "en" ? "Section Content" : "模块内容"}
      <textarea rows="4" data-module-field="content" data-module-key="${key}" placeholder="${currentLanguage === "en" ? "Fill in this section" : "填写模块内容"}">${escapeHtml(moduleData.content)}</textarea>
    </label>
  `;
  additionalModulesContainer.appendChild(fieldElement);
}

function renderWorkModule() {
  const fieldElement = document.createElement("fieldset");
  fieldElement.className = "form-step";
  fieldElement.dataset.moduleKey = "work";
  fieldElement.innerHTML = `
    <legend>
      <span>+</span>
      <strong>${escapeHtml(t("workExperience"))}</strong>
    </legend>
    <div class="field-full repeatable-block">
      <div class="repeatable-heading">
        <span>${escapeHtml(t("workExperience"))}</span>
        <button id="addWorkBtn" class="add-item-btn" type="button">${t("addWork")}</button>
      </div>
      <div id="workItems" class="repeatable-list" aria-label="工作经历列表"></div>
    </div>
  `;
  additionalModulesContainer.appendChild(fieldElement);
  renderExperienceForm(document.getElementById("workItems"), workData, "work");
}

function updateAdditionalModuleField(target) {
  const { moduleKey, moduleField } = target.dataset;

  if (!moduleKey || !moduleField || !addedModules[moduleKey]) {
    return;
  }

  addedModules[moduleKey][moduleField] = target.value;
  updatePreview();
  saveResumeData();
}

function renderAdditionalModulesPreview() {
  resumePreview.querySelectorAll("[data-preview-module-key]").forEach((section) => {
    section.remove();
  });

  Object.keys(addedModules).forEach((key) => {
    if (key === "work") {
      renderWorkPreviewModule();
      return;
    }

    renderSimplePreviewModule(key);
  });
}

function renderSimplePreviewModule(key) {
  const definition = moduleMap[key];
  const moduleData = addedModules[key];
  const title = key === "custom" ? cleanImportedValue(moduleData.title) || t("customSection") : t(definition.titleKey);
  const content = cleanImportedValue(moduleData.content);
  const section = document.createElement("section");

  section.dataset.previewModuleKey = key;
  section.classList.add("preview-added-module");
  section.classList.toggle("is-placeholder-only", !content);
  section.innerHTML = `
    <h3>${escapeHtml(title)}</h3>
    <p class="${content ? "" : "preview-placeholder"}">${escapeHtml(content || t("placeholderModule"))}</p>
  `;
  resumePreview.insertBefore(section, previewSelfEvaluationSection);
}

function renderWorkPreviewModule() {
  const section = document.createElement("section");
  section.dataset.previewModuleKey = "work";
  section.classList.add("preview-added-module");
  section.innerHTML = `
    <h3>${escapeHtml(t("workExperience"))}</h3>
    <div class="resume-experience-list"></div>
  `;
  resumePreview.insertBefore(section, previewSelfEvaluationSection);
  renderExperiencePreview(section.querySelector(".resume-experience-list"), workData, "work");
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#39;"
  })[char]);
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

function getCollection(type) {
  if (type === "project") {
    return projectsData;
  }

  if (type === "work") {
    return workData;
  }

  return internshipsData;
}

function addExperience(type) {
  getCollection(type).push(createEmptyExperience(type));
  if (type === "work") {
    renderAdditionalModules();
  } else {
    renderAllExperienceForms();
  }
  updatePreview();
  saveResumeData();
}

function removeExperience(type, index) {
  const collection = getCollection(type);

  collection.splice(index, 1);

  if (type === "work") {
    renderAdditionalModules();
  } else {
    renderAllExperienceForms();
  }
  updatePreview();
  saveResumeData();
}

function updateExperienceField(target) {
  const { type, index, field } = target.dataset;

  if (!type || !field) {
    return;
  }

  getCollection(type)[Number(index)][field] = target.value;
  updatePreview();
  saveResumeData();
}

function saveResumeData() {
  localStorage.setItem(storageKey, JSON.stringify(getResumeDataFromForm()));
}

function loadResumeData() {
  const savedData = localStorage.getItem(storageKey);

  if (!savedData) {
    return;
  }

  try {
    const formData = JSON.parse(savedData);
    applyResumeData(formData);

    window.setTimeout(() => {
      showToast(t("draftRestored"));
    }, 200);
  } catch (error) {
    localStorage.removeItem(storageKey);
  }
}

function refreshResumeState() {
  renderAllExperienceForms();
  renderAdditionalModules();
  updatePreview();
  updateAvatarPreview();
  updateTemplateSelection();
}

function showDraftStatus(message) {
  showToast(message);
}

function isInvalidCloudSessionError(error) {
  return error?.status === 404 || error?.status === 410;
}

function isDesktopReadOnlyCloudSession(session = loadCloudSession()) {
  return Boolean(
    session?.cloudConnected &&
    session?.readOnly &&
    session?.source === "desktop" &&
    session?.draftId &&
    session?.connectionCode
  );
}

function isUserEditingResume() {
  const activeElement = document.activeElement;

  return Boolean(
    activeElement &&
    editorView?.contains(activeElement) &&
    (
      activeElement.matches("input, textarea, select") ||
      activeElement.isContentEditable
    )
  );
}

async function refreshFromCloudSession() {
  const session = loadCloudSession();

  if (!session?.connectionCode && !session?.draftToken) {
    return;
  }

  try {
    console.log("[DESKTOP SYNC] loading cloud", cloudSession);
    const result = await loadCloudDraft();
    console.log("[DESKTOP SYNC] load response", result);
    const localVersion = lastCloudVersion;
    const cloudVersion = result?.version;
    console.log("[DESKTOP SYNC] local version", localVersion);
    console.log("[DESKTOP SYNC] cloud version", cloudVersion);

    if (!result?.resumeJson) {
      return;
    }

    console.log("[DESKTOP SYNC] applying update");
    rememberCloudSnapshot(result);
    applyResumeData(result.resumeJson);
    saveResumeData();
    refreshResumeState();
    console.log("[DESKTOP SYNC] preview refreshed");
  } catch (error) {
    if (isInvalidCloudSessionError(error)) {
      saveCloudSession(null);
    }
  }
}

function stopDesktopCloudPolling() {
  if (desktopCloudSyncTimer) {
    window.clearInterval(desktopCloudSyncTimer);
    desktopCloudSyncTimer = null;
  }
}

async function pollDesktopReadOnlyCloudDraft() {
  const session = loadCloudSession();

  if (
    desktopCloudSyncInFlight ||
    currentView !== "editor" ||
    !isDesktopReadOnlyCloudSession(session)
  ) {
    return;
  }

  desktopCloudSyncInFlight = true;

  try {
    console.log("[DESKTOP SYNC] loading cloud", cloudSession);
    const result = await loadCloudDraft();
    console.log("[DESKTOP SYNC] load response", result);
    const localVersion = lastCloudVersion;
    const cloudVersion = result?.version;
    console.log("[DESKTOP SYNC] local version", localVersion);
    console.log("[DESKTOP SYNC] cloud version", cloudVersion);

    if (!result?.resumeJson) {
      return;
    }

    const versionChanged =
      result.version !== undefined &&
      result.version !== lastCloudVersion;
    const updatedAtChanged =
      result.updatedAt &&
      result.updatedAt !== lastCloudUpdatedAt;

    if (!versionChanged && !updatedAtChanged) {
      return;
    }

    console.log("[DESKTOP SYNC] applying update");
    rememberCloudSnapshot(result);
    applyResumeData(result.resumeJson);
    saveResumeData();
    refreshResumeState();
    console.log("[DESKTOP SYNC] preview refreshed");
  } catch (error) {
    console.error("desktop cloud sync failed", error);
  } finally {
    desktopCloudSyncInFlight = false;
  }
}

function startDesktopCloudPolling() {
  const session = loadCloudSession();

  stopDesktopCloudPolling();

  if (!isDesktopReadOnlyCloudSession(session)) {
    return;
  }

  console.log("[DESKTOP SYNC] start polling");

  console.log("[DESKTOP SYNC] poll tick");
  pollDesktopReadOnlyCloudDraft();

  desktopCloudSyncTimer = window.setInterval(() => {
    console.log("[DESKTOP SYNC] poll tick");
    pollDesktopReadOnlyCloudDraft();
  }, 3000);
}

async function restoreCloudSessionOnInit() {
  const session = loadCloudSession();

  if (isMobileModeFromUrl || !isDesktopReadOnlyCloudSession(session)) {
    return false;
  }

  console.log("[DESKTOP RESTORE] found session", session);
  showView("editor");

  try {
    console.log("[DESKTOP SYNC] loading cloud", cloudSession);
    const result = await loadCloudDraft();
    console.log("[DESKTOP RESTORE] load response", result);
    const localVersion = lastCloudVersion;
    const cloudVersion = result?.version;
    console.log("[DESKTOP SYNC] local version", localVersion);
    console.log("[DESKTOP SYNC] cloud version", cloudVersion);

    if (!result?.resumeJson) {
      console.log("[DESKTOP RESTORE] editor restored");
      return true;
    }

    console.log("[DESKTOP SYNC] applying update");
    rememberCloudSnapshot(result);
    applyResumeData(result.resumeJson);
    saveResumeData();
    refreshResumeState();
    console.log("[DESKTOP RESTORE] editor restored");
    window.setTimeout(() => {
      showToast(t("cloudDraftRestored"));
    }, 200);

    return true;
  } catch (error) {
    console.error("restore cloud draft failed", error);
    showErrorToast(t("cloudDraftRestoreFailed"));
    return true;
  } finally {
    startDesktopCloudPolling();
  }
}

async function autoConnectMobileFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const mode = params.get("mode");
  const code = params.get("code")?.replace(/\D/g, "").slice(0, 6) || "";
  const draftId = params.get("draftId") || params.get("draft_id") || "";
  const urlDraftToken = params.get("draftToken") || params.get("draft_token") || "";
  console.log("[PHONE] url params", { mode, draftId, code, hasDraftToken: Boolean(urlDraftToken) });
  console.log("[PHONE] url draftId", draftId);
  console.log("[PHONE] url code", code);
  console.log("[PHONE] url draftToken exists", Boolean(urlDraftToken));
  if (draftId && code && urlDraftToken) {
    saveMobileWritableSession(draftId, urlDraftToken, code);
    console.log("[PHONE] saved session draftToken exists", Boolean(loadCloudSession()?.draftToken));
  }

  const initialPhoneSession = loadCloudSession();
  updateMobileDebugBox({
    mode,
    draftId,
    code,
    draftTokenExists: Boolean(urlDraftToken),
    sessionDraftId: initialPhoneSession?.draftId || "",
    sessionConnectionCode: initialPhoneSession?.connectionCode || "",
    sessionDraftTokenExists: Boolean(initialPhoneSession?.draftToken),
    autoConnectStarted: false,
    connectCloudDraftResponse: "",
    connectCloudDraftError: ""
  });

  if (!isMobileModeFromUrl || !draftId || !/^\d{6}$/.test(code)) {
    if (isMobileModeFromUrl && (draftId || code)) {
      mobileCloudStatus.textContent = t("connectCloudDraftFailed");
      showErrorToast(t("connectCloudDraftFailed"));
    }

    return false;
  }

  mobileCloudStatus.textContent = t("connectingCloudDraft");
  connectionCodeText.textContent = code;
  console.log("[PHONE] auto connect start");
  updateMobileDebugBox({ autoConnectStarted: true });

  try {
    console.log("[PHONE] url draftToken exists", Boolean(urlDraftToken));
    const result = await connectCloudDraft(code, draftId, urlDraftToken);
    console.log("[PHONE] auto connect response", result);
    if (urlDraftToken) {
      saveMobileWritableSession(result.draftId || draftId, urlDraftToken, code);
      console.log("[PHONE] saved session draftToken exists", Boolean(loadCloudSession()?.draftToken));
    }
    const savedPhoneSession = loadCloudSession();
    updateMobileDebugBox({
      sessionDraftId: savedPhoneSession?.draftId || "",
      sessionConnectionCode: savedPhoneSession?.connectionCode || "",
      sessionDraftTokenExists: Boolean(savedPhoneSession?.draftToken),
      connectCloudDraftResponse: result,
      connectCloudDraftError: ""
    });
    mobileCloudStatus.textContent = t("connectedDesktop");
    showToast(t("connectedDesktop"));
    return true;
  } catch (error) {
    console.error("auto connect mobile draft failed", error);
    updateMobileDebugBox({
      connectCloudDraftError: {
        message: error?.message || String(error),
        status: error?.status || ""
      }
    });
    mobileCloudStatus.textContent = t("connectCloudDraftFailed");
    showErrorToast(t("connectCloudDraftFailed"));
    return false;
  }
}

async function saveDraft() {
  const isMobileSave = isMobileModeFromUrl || !isDesktopViewport();

  if (isMobileSave) {
    console.log("[MOBILE SAVE] start");
    const session = loadCloudSession();
    console.log("[MOBILE SAVE] saving draftId", session?.draftId || "");
    console.log("[MOBILE SAVE] connectionCode", session?.connectionCode || "");
    console.log("[MOBILE SAVE] draftToken exists", Boolean(session?.draftToken));

    if (!session?.draftId || !session?.draftToken) {
      console.error("[MOBILE SAVE] error", {
        message: "Missing draftToken for mobile cloud save",
        cloudSession,
        draftId: session?.draftId,
        draftToken: session?.draftToken,
        connectionCode: session?.connectionCode,
        source: "mobile"
      });

      showErrorToast(t("mobileCloudSessionLost"));
      return;
    }

    saveResumeData();
    console.log("[MOBILE SAVE] local saved");
    showDraftStatus(t("localSavedSyncingCloud"));

    window.setTimeout(() => {
      console.log("[MOBILE SAVE] upload start", {
        cloudSession,
        draftId: session.draftId,
        draftToken: session.draftToken,
        connectionCode: session.connectionCode,
        source: "mobile"
      });

      saveCloudDraft()
        .then((result) => {
          console.log("[MOBILE SAVE] upload response", result);
          console.log("[MOBILE SAVE] returned draftId", result?.draftId || "");
          console.log("[MOBILE SAVE] cloud version", result?.version);
          console.log("[MOBILE SAVE] updatedAt", result?.updatedAt);

          if (!result) {
            showDraftStatus(t("draftSaved"));
            return;
          }

          rememberCloudSnapshot(result);
          showDraftStatus(t("cloudSavedFast"));
        })
        .catch((error) => {
          console.error("[MOBILE SAVE] error", error);

          console.error("save cloud draft failed", error);
          showErrorToast(t("cloudSyncFailedLocalSaved"));
        });
    }, 0);
    return;
  }

  saveResumeData();

  const session = loadCloudSession();

  if (!session?.draftId || !session?.draftToken) {
    showDraftStatus(t("draftSaved"));
    return;
  }

  showDraftStatus(t("localSavedSyncingCloud"));

  window.setTimeout(() => {
    saveCloudDraft()
      .then((result) => {
        if (!result) {
          showDraftStatus(t("draftSaved"));
          return;
        }

        rememberCloudSnapshot(result);
        showDraftStatus(t("cloudSavedFast"));
      })
      .catch((error) => {
        if (isInvalidCloudSessionError(error)) {
          saveCloudSession(null);
        }

        console.error("save cloud draft failed", error);
        showErrorToast(t("cloudSyncFailedLocalSaved"));
      });
  }, 0);
}

function hasEnoughResumeContent() {
  const filledFieldCount = Object.values(fields).filter((field) => field.value.trim()).length;
  const hasExperience = projectsData.some((item) => item.name || item.description) || internshipsData.some((item) => item.name || item.description) || workData.some((item) => item.name || item.description);
  const hasAddedModuleContent = Object.values(addedModules).some((moduleData) => moduleData.content);

  return filledFieldCount >= 4 || hasExperience || hasAddedModuleContent;
}

function clearResumeForm() {
  Object.values(fields).forEach((field) => {
    field.value = "";
  });

  avatarData = "";
  projectsData = [];
  internshipsData = [];
  workData = [];
  addedModules = {};
  selectedTemplate = "classic";
  resumeImportText.value = "";
  resumeFileInput.value = "";
  resumeFileName.textContent = "";
  importedResumeSource = "";
  localStorage.removeItem(storageKey);
  saveCloudSession(null);

  templateRadios.forEach((radio) => {
    radio.checked = radio.value === selectedTemplate;
  });

  refreshResumeState();
  showDraftStatus(t("formCleared"));
}

function fillExampleData() {
  const exampleFields = {
    name: "林小雨",
    email: "linxiaoyu@example.com",
    phone: "138 0000 1234",
    gender: "女",
    age: "21",
    city: "广州",
    website: "github.com/linxiaoyu",
    summary: "计算机科学专业大三学生，关注前端工程化与 AI 应用开发。熟悉 Web 基础与常用前端框架，具备从需求拆解、界面实现到联调上线的完整项目实践经验。",
    advantages: "学习能力强，能快速阅读文档并落地新技术；重视代码可维护性和用户体验；有良好的沟通意识，能在课程项目和社团协作中主动推进问题解决。",
    school: "华南理工大学",
    major: "计算机科学与技术",
    graduation: "2027年6月",
    jobTarget: "前端开发实习生 / AI 应用开发实习生",
    expectedSalary: "8K-12K",
    techTags: "JavaScript、React、Vue、Python、GitHub、UI Design",
    programmingLanguages: "JavaScript、TypeScript、Python、HTML、CSS、SQL",
    webDevelopment: "React、Vue、响应式布局、页面交互、组件化开发",
    databases: "MySQL、PostgreSQL 基础操作与 SQL 查询",
    devTools: "VS Code、Git、GitHub、Chrome DevTools、Figma、Postman",
    aiApplications: "ChatGPT、AI API 调用、Prompt Engineering、AI 辅助开发",
    selfEvaluation: "我对技术实现和产品体验都有持续兴趣，习惯通过复盘改进代码质量和协作方式。希望在实习中参与真实业务项目，提升工程能力并为团队交付稳定、清晰、可维护的功能。"
  };

  Object.entries(exampleFields).forEach(([fieldName, value]) => {
    fields[fieldName].value = value;
  });

  projectsData = [
    {
      name: "AI 简历优化助手",
      role: "前端开发 / 需求实现",
      time: "2025.09 - 2025.12",
      description: "负责简历表单、实时预览和模板切换模块开发。\n使用 JavaScript 实现本地草稿保存、TXT 文本导入和关键词解析填充。\n优化 A4 预览布局，保证网页预览与 PDF 导出效果一致。",
      result: "完成从信息录入到 PDF 导出的完整流程，提升了学生用户制作简历的效率。"
    },
    {
      name: "校园活动报名平台",
      role: "前端开发",
      time: "2025.03 - 2025.06",
      description: "使用 Vue 实现活动列表、报名表单、管理员审核和数据看板页面。\n封装可复用表单组件，处理移动端适配和基础表单校验。",
      result: "支持 300+ 名学生报名活动，减少人工收集信息的时间。"
    }
  ];

  internshipsData = [
    {
      name: "广州启航科技有限公司",
      role: "前端开发实习生",
      time: "2026.01 - 2026.03",
      description: "参与内部运营后台页面维护，负责列表筛选、弹窗表单和数据展示组件开发。\n配合后端完成接口联调，使用 Chrome DevTools 定位样式和交互问题。",
      result: "熟悉了团队 Git 协作流程和真实业务需求的开发节奏。"
    }
  ];

  avatarData = "";
  importedResumeSource = "";
  workData = [];
  addedModules = {};
  selectedTemplate = "classic";
  templateRadios.forEach((radio) => {
    radio.checked = radio.value === selectedTemplate;
  });

  refreshResumeState();
  saveResumeData();
  showDraftStatus(currentLanguage === "en" ? "Example filled and saved as draft." : "示例数据已填充，并已保存为草稿。");
}

Object.values(fields).forEach((field) => {
  field.addEventListener("input", () => {
    updatePreview();
    saveResumeData();
  });
});

projectItems.addEventListener("input", (event) => {
  updateExperienceField(event.target);
});

internshipItems.addEventListener("input", (event) => {
  updateExperienceField(event.target);
});

projectItems.addEventListener("click", (event) => {
  if (event.target.matches(".remove-item-btn")) {
    removeExperience(event.target.dataset.type, Number(event.target.dataset.index));
  }
});

internshipItems.addEventListener("click", (event) => {
  if (event.target.matches(".remove-item-btn")) {
    removeExperience(event.target.dataset.type, Number(event.target.dataset.index));
  }
});

additionalModulesContainer.addEventListener("input", (event) => {
  if (event.target.matches("[data-module-field]")) {
    updateAdditionalModuleField(event.target);
    return;
  }

  updateExperienceField(event.target);
});

additionalModulesContainer.addEventListener("click", (event) => {
  if (event.target.matches(".remove-item-btn")) {
    removeExperience(event.target.dataset.type, Number(event.target.dataset.index));
    return;
  }

  if (event.target.matches("#addWorkBtn")) {
    addExperience("work");
  }
});

addProjectBtn.addEventListener("click", () => {
  addExperience("project");
});

addInternshipBtn.addEventListener("click", () => {
  addExperience("internship");
});

smartFillBtn.addEventListener("click", () => {
  smartFillFromResumeText();
});

openImportModalBtn.addEventListener("click", () => {
  openImportModal();
});

closeImportModalBtn.addEventListener("click", () => {
  closeImportModal();
});

openModuleModalBtn.addEventListener("click", () => {
  openModuleModal();
});

closeModuleModalBtn.addEventListener("click", () => {
  closeModuleModal();
});

moduleOptions.addEventListener("click", (event) => {
  const option = event.target.closest("[data-module-key]");

  if (option) {
    addModule(option.dataset.moduleKey);
  }
});

importModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-import-modal]")) {
    closeImportModal();
  }
});

moduleModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-module-modal]")) {
    closeModuleModal();
  }
});

clearConfirmModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-clear-modal]")) {
    closeClearConfirmModal();
  }
});

exportTipModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-export-modal]")) {
    closeExportTipModal();
  }
});

scanConnectModal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-scan-connect-modal]")) {
    closeScanConnectModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  if (scanConnectModal.classList.contains("is-open")) {
    closeScanConnectModal();
    return;
  }

  if (exportTipModal.classList.contains("is-open")) {
    closeExportTipModal();
    return;
  }

  if (clearConfirmModal.classList.contains("is-open")) {
    closeClearConfirmModal();
    return;
  }

  if (moduleModal.classList.contains("is-open")) {
    closeModuleModal();
    return;
  }

  if (importModal.classList.contains("is-open")) {
    closeImportModal();
  }
});

resumeFileInput.addEventListener("change", () => {
  importResumeFile();
});

resumeDropZone.addEventListener("click", () => {
  resumeFileInput.click();
});

resumeDropZone.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    resumeFileInput.click();
  }
});

["dragenter", "dragover"].forEach((eventName) => {
  resumeDropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    resumeDropZone.classList.add("is-dragover");
  });
});

["dragleave", "drop"].forEach((eventName) => {
  resumeDropZone.addEventListener(eventName, (event) => {
    event.preventDefault();
    resumeDropZone.classList.remove("is-dragover");
  });
});

resumeDropZone.addEventListener("drop", (event) => {
  const file = event.dataTransfer.files[0];

  if (file) {
    importResumeFile(file);
  }
});

saveDraftBtn.addEventListener("click", () => {
  saveDraft();
});

generateConnectionCodeBtn.addEventListener("click", async () => {
  mobileCloudStatus.textContent = t("generatingConnectionCode");
  connectionCodeText.textContent = "";
  generateConnectionCodeBtn.disabled = true;

  try {
    const result = await createCloudDraft();
    connectionCodeText.textContent = result.connectionCode || "";
    mobileCloudStatus.textContent = t("connectionCodeReady");
    saveResumeData();
  } catch (error) {
    console.error("create cloud draft failed", error);
    mobileCloudStatus.textContent = t("connectionCodeFailed");
    showErrorToast(t("connectionCodeFailed"));
  } finally {
    generateConnectionCodeBtn.disabled = false;
  }
});

connectCloudDraftBtn.addEventListener("click", async () => {
  const code = connectionCodeInput.value.replace(/\D/g, "").slice(0, 6);
  connectionCodeInput.value = code;

  if (!/^\d{6}$/.test(code)) {
    connectionStatus.textContent = t("enterConnectionCode");
    showToast(t("enterConnectionCode"));
    return;
  }

  connectionStatus.textContent = t("connectingCloudDraft");
  connectCloudDraftBtn.disabled = true;

  try {
    await connectCloudDraft(code);
    connectionStatus.textContent = t("connectedCloudDraft");
    showToast(t("connectedCloudDraft"));
    showView("editor");
    startDesktopCloudPolling();
  } catch (error) {
    console.error("connect cloud draft failed", error);
    connectionStatus.textContent = t("connectCloudDraftFailed");
    showErrorToast(t("connectCloudDraftFailed"));
  } finally {
    connectCloudDraftBtn.disabled = false;
  }
});

connectionCodeInput.addEventListener("input", () => {
  connectionCodeInput.value = connectionCodeInput.value.replace(/\D/g, "").slice(0, 6);
});

connectionCodeInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    connectCloudDraftBtn.click();
  }
});

fillExampleBtn.addEventListener("click", () => {
  fillExampleData();
});

clearFormBtn.addEventListener("click", () => {
  openClearConfirmModal();
});

cancelClearBtn.addEventListener("click", () => {
  closeClearConfirmModal();
});

confirmClearBtn.addEventListener("click", () => {
  closeClearConfirmModal();
  clearResumeForm();
});

avatarInput.addEventListener("change", () => {
  const file = avatarInput.files[0];

  if (!file || !file.type.startsWith("image/")) {
    return;
  }

  const reader = new FileReader();

  reader.addEventListener("load", () => {
    avatarData = reader.result;
    updateAvatarPreview();
    saveResumeData();
  });

  reader.readAsDataURL(file);
});

templateRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    updateTemplateSelection();
    saveResumeData();
  });
});

document.querySelectorAll(".language-switch").forEach((switchElement) => {
  switchElement.addEventListener("click", (event) => {
    const button = event.target.closest("[data-lang]");

    if (!button || button.dataset.lang === currentLanguage) {
      return;
    }

    currentLanguage = button.dataset.lang;
    localStorage.setItem(languageStorageKey, currentLanguage);
    updateLanguage();
  });
});

startBuildingBtn.addEventListener("click", () => {
  if (isMobileModeFromUrl) {
    loadCloudSession();
    showView("editor");
    return;
  }

  loadCloudSession();
  refreshFromCloudSession();
  showView("editor");
  startDesktopCloudPolling();
});

openScanConnectBtn.addEventListener("click", () => {
  openScanConnectModal();
});

closeScanConnectBtn.addEventListener("click", () => {
  closeScanConnectModal();
});

mobileGuideHomeBtn.addEventListener("click", () => {
  mobileModeHomeOverride = true;
  showView("landing");
});

backHomeBtn.addEventListener("click", () => {
  showDefaultEntryView();
});

copyLinkBtn.addEventListener("click", async () => {
  const shareUrl = getMobileModeUrl();

  try {
    await navigator.clipboard.writeText(shareUrl);
    showToast(t("linkCopied"));
  } catch (error) {
    currentLinkText.focus();
    showToast(shareUrl);
  }
});

window.addEventListener("resize", () => {
  if (currentView === "editor") {
    return;
  }

  showDefaultEntryView();
});

downloadBtn.addEventListener("click", () => {
  if (!hasEnoughResumeContent()) {
    showToast(t("notEnoughContent"));
    return;
  }

  openExportTipModal();
});

confirmExportBtn.addEventListener("click", () => {
  closeExportTipModal();
  window.print();
});

async function initializeApp() {
  loadResumeData();
  renderAllExperienceForms();
  updatePreview();
  updateAvatarPreview();
  updateTemplateSelection();
  updateLanguage();
  console.log("[INIT] view decision", {
    mode: new URLSearchParams(window.location.search).get("mode"),
    width: window.innerWidth,
    hasCloudSession: Boolean(loadCloudSession()?.cloudConnected)
  });
  renderMobileDebugBox();

  if (isMobileModeFromUrl) {
    showView("mobileGuide");
    await autoConnectMobileFromUrl();
    return;
  }

  const restoredCloudSession = await restoreCloudSessionOnInit();

  if (!restoredCloudSession) {
    showDefaultEntryView();
  }
}

initializeApp();
