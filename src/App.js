import StudentForm from "./components/StudentForm";
import Question from "./components/Question"
import {useState} from 'react'
import axios from "axios";
import ResultDisplay from "./components/ResultDisplay";
import DisplayResult from "./components/DisplayResult";
import Label from "./components/Label";

const questionsbysubject = {
  hardware: [
    {
      id: 1,
      Question: "Which part of the computer is responsible for executing instructions?",
      Options: ["Hard Disk", "RAM", "CPU", "Motherboard"],
    },
    {
      id: 2,
      Question: "Which storage device generally has the largest capacity?",
      Options: ["DVD", "USB Flash Drive", "SSD", "Hard Disk Drive"],
    },
    {
      id: 3,
      Question: "Which of the following is a volatile memory?",
      Options: ["SSD", "Hard Disk", "RAM", "ROM"],
    },
    {
      id: 4,
      Question: "What is the purpose of a firewall in a computer network?",
      Options: ["To speed up the internet", "To protect against unauthorized access", "To manage network traffic", "To boost Wi-Fi signal"],
    },
    {
      id: 5,
      Question: "What is the purpose of the ALU in a computer?",
      Options: ["To manage memory", "To perform arithmetic and logic operations", "To control input and output", "To manage storage"],
    },
    {
      id: 6,
      Question: "Which of the following is an open-source operating system?",
      Options: ["Windows", "macOS", "Linux", "iOS"],
    },
    {
      id: 7,
      Question: "Which of the following keys is commonly used to enter the BIOS setup when starting a computer?",
      Options: ["Esc", "F2", "F8", "F10"],
    },
    {
      id: 8,
      Question: "Which of the following is a database management system?",
      Options: ["Microsoft Excel", "Microsoft Access", "Microsoft PowerPoint", "Microsoft Word"],
    },
    {
      id: 9,
      Question: "What is the function of a graphics card?",
      Options: ["To manage memory", "To improve visual output and graphics performance", "To store data", "To process audio"],
    },
    {
      id: 10,
      Question: "Which of the following is not a peripheral device?",
      Options: ["Mouse", "Keyboard", "Motherboard", "Printer"],
    },
    {
      id: 11,
      Question: "Which of the following is a primary function of a router?",
      Options: ["To store data", "To direct network traffic between devices", "To display images", "To play audio"],
    },
    {
      id: 12,
      Question: "What is the main purpose of cache memory?",
      Options: ["To increase storage capacity", "To speed up data access from the main memory", "To backup data", "To display graphics"],
    },
    {
      id: 13,
      Question: "Which of the following protocols is used for secure communication over a computer network?",
      Options: ["FTP", "HTTP", "HTTPS", "SMTP"],
    },
    {
      id: 14,
      Question: "Which storage device uses magnetic disks to store data?",
      Options: ["SSD", "Hard Disk Drive (HDD)", "USB Flash Drive", "CD-ROM"],
    },
    {
      id: 15,
      Question: "Which key combination is used to close the currently active application in Windows?",
      Options: ["Ctrl + Alt + Delete", "Ctrl + Shift + Esc", "Ctrl + F4", "Alt + F4"],
    },
    {
      id: 16,
      Question: "Which of the following is a widely used email sending protocol?",
      Options: ["FTP", "SMTP", "HTTP", "POP3"],
    },
    {
      id: 17,
      Question: "What does the term 'booting' refer to?",
      Options: ["Shutting down the computer", "Starting up the computer and loading the OS", "Installing software", "Deleting files"],
    },
    {
      id: 18,
      Question: "Which device is required to connect to a wireless network?",
      Options: ["Graphics Card", "Network Interface Card (NIC)", "Sound Card", "Wi-Fi Adapter"],
    },
    {
      id: 19,
      Question: "What does BIOS stand for?",
      Options: ["Basic Input Output System", "Binary Input Output Service", "Basic Internet Operating System", "Binary Integrated Open Software"],
    },
    {
      id: 20,
      Question: "Which component holds all other components together on a PC?",
      Options: ["CPU", "Hard Drive", "Motherboard", "RAM"],
    },
    {
      id: 21,
      Question: "What is the function of the Northbridge chipset on a motherboard?",
      Options: ["Manage communication between CPU, RAM, and graphics card", "Manage communication between slower peripheral devices", "Control the power supply to the CPU", "Store the BIOS settings"],
    },
    {
      id: 22,
      Question: "Which type of port provides the fastest data transfer speeds?",
      Options: ["USB 2.0", "FireWire", "Ethernet", "Thunderbolt 3"],
    },
    {
      id: 23,
      Question: "In the context of storage, what does 'latency' refer to?",
      Options: ["The total storage capacity", "The speed of data transfer", "The time delay to locate and retrieve data", "The physical size of the disk"],
    },
    {
      id: 24,
      Question: "What is 'thermal throttling' in a CPU?",
      Options: ["A feature that boosts performance under load", "A security feature to prevent hacking", "A protective measure that reduces CPU speed to lower temperature", "A method for overclocking the CPU safely"],
    },
    {
      id: 25,
      Question: "What does POST stand for in the boot process?",
      Options: ["Power-On Self-Test", "Primary Operating System Task", "Peripheral Online Status Tool", "Power-Off System Transition"],
    },
    {
      id: 26,
      Question: "Which of these is a non-volatile memory type?",
      Options: ["DRAM", "SRAM", "Cache Memory", "Flash Memory"],
    },
    {
      id: 27,
      Question: "What unit is used to measure a CPU's clock speed?",
      Options: ["Gigabytes (GB)", "Megabits per second (Mbps)", "Hertz (Hz)", "Dots per inch (DPI)"],
    },
    {
      id: 28,
      Question: "What is a 'SATA' port used for?",
      Options: ["Connecting monitors", "Connecting storage drives like SSDs and HDDs", "Connecting printers", "Connecting to a network"],
    },
    {
      id: 29,
      Question: "What does RAID stand for in storage technology?",
      Options: ["Random Access Integrated Drive", "Redundant Array of Independent Disks", "Rapid Access and Indexing Directory", "Read-Only Archived Information Database"],
    },
    {
      id: 30,
      Question: "Which of the following is a key difference between a CPU and a GPU?",
      Options: ["A CPU has many cores for parallel tasks, while a GPU has few for serial tasks", "A GPU has many cores for parallel tasks, while a CPU has few for serial tasks", "Only CPUs are found in modern computers", "GPUs can't perform mathematical calculations"],
    },
  ],
  html: [
    {
      id: 1,
      Question: "Which tag is used to encapsulate machine-readable information about the document?",
      Options: ["<meta>", "<body>", "<info>", "<data>"],
    },
    {
      id: 2,
      Question: "How do you create a hyperlink that opens in a new tab?",
      Options: ['<a href="url" new>', '<a href="url" target="_blank">', '<a href="url" target="_new">', '<a href="url" open="new">'],
    },
    {
      id: 3,
      Question: "Which of the following is NOT a semantic HTML5 element?",
      Options: ["<article>", "<footer>", "<div>", "<section>"],
    },
    {
      id: 4,
      Question: "Which attribute is used with the <img> tag to provide text for screen readers?",
      Options: ["title", "description", "alt", "longdesc"],
    },
    {
      id: 5,
      Question: "To create a dropdown list in a form, which tag is used?",
      Options: ["<input type='dropdown'>", "<list>", "<select>", "<dropdown>"],
    },
    {
      id: 6,
      Question: "Which character is used to indicate an end tag?",
      Options: ["<", "^", "/", "*"],
    },
    {
      id: 7,
      Question: "What is the purpose of the 'defer' attribute in a <script> tag?",
      Options: ["It prevents the script from executing.", "It executes the script after the page has finished parsing.", "It executes the script asynchronously.", "It loads the script from a different domain."],
    },
    {
      id: 8,
      Question: "Which tag defines a thematic break in an HTML page, often represented as a horizontal line?",
      Options: ["<line>", "<break>", "<hr>", "<div>"],
    },
    {
      id: 9,
      Question: "Which tag is semantically correct for the main content of a webpage?",
      Options: ["<main>", "<content>", "<div id='main'>", "<primary>"],
    },
    {
      id: 10,
      Question: "What does the 'vlink' attribute in the <body> tag specify?",
      Options: ["The color of a virtual link", "The color of an active link", "The color of a visited link", "The visibility of a link"],
    },
    {
      id: 11,
      Question: "Which of the following is an example of a non-paired (empty) tag?",
      Options: ["<p>", "<div>", "<img>", "<span>"],
    },
    {
      id: 12,
      Question: "How can you make a numbered list that starts from the count of 5?",
      Options: ['<ol start="5">', '<ol begin="5">', '<ol initial="5">', '<ol list-start="5">'],
    },
    {
      id: 13,
      Question: "Which attribute would you use with a TD tag to merge two cells horizontally?",
      Options: ["merge='colspan'", "rowspan='2'", "colspan='2'", "merge='horizontal'"],
    },
    {
      id: 14,
      Question: "Which input type is specifically designed for entering a date and time?",
      Options: ["<input type='date'>", "<input type='datetime-local'>", "<input type='time'>", "<input type='calendar'>"],
    },
    {
      id: 15,
      Question: "What is the purpose of the <canvas> element?",
      Options: ["To display static images.", "To create a container for 3D graphics.", "To draw graphics on the fly via scripting (JavaScript).", "To embed video content."],
    },
    {
      id: 16,
      Question: "Which HTML tag is used to define navigation links?",
      Options: ["<navigate>", "<nav>", "<navigation>", "<links>"],
    },
    {
      id: 17,
      Question: "What is the difference between <strong> and <b> tags?",
      Options: ["There is no difference.", "<b> is for bold text, while <strong> is for strong importance.", "<strong> is a deprecated tag.", "<b> is semantic, while <strong> is only for styling."],
    },
    {
      id: 18,
      Question: "Which attribute specifies a short hint that describes the expected value of an input field?",
      Options: ["hint", "value", "placeholder", "title"],
    },
    {
      id: 19,
      Question: "What is a data attribute in HTML5?",
      Options: ["An attribute to store custom data private to the page or application.", "An attribute to define the data type of an input field.", "An attribute for database connectivity.", "A required attribute for all form elements."],
    },
    {
      id: 20,
      Question: "Which tag is used to specify a base URL for all relative URLs in a document?",
      Options: ["<base>", "<url>", "<root>", "<link>"],
    },
    {
      id: 21,
      Question: "What does the acronym ARIA stand for in web development?",
      Options: ["Accessible Rich Internet Applications", "Advanced Responsive Internet Architecture", "Automated Reading Interface API", "Active Rendering and Interaction"],
    },
    {
      id: 22,
      Question: "How do you specify the character encoding for an HTML document?",
      Options: ["<meta encoding='UTF-8'>", "<meta charset='UTF-8'>", "<character-encoding>UTF-8</character-encoding>", "<charset>UTF-8</charset>"],
    },
    {
      id: 23,
      Question: "Which tag is used to define subscripted text?",
      Options: ["<sub>", "<down>", "<sup>", "<script>"],
    },
    {
      id: 24,
      Question: "What is the purpose of the `lang` attribute in the `<html>` tag?",
      Options: ["To specify the programming language of the document.", "To declare the human language of the document for accessibility.", "To set the language for the web server.", "To translate the page content automatically."],
    },
    {
      id: 25,
      Question: "Which HTML element is used to display a scalar measurement within a known range?",
      Options: ["<range>", "<gauge>", "<measure>", "<meter>"],
    },
    {
      id: 26,
      Question: "How do you make an image a clickable link?",
      Options: ["<img link='url'>", "<a href='url'><img src='img.jpg'></a>", "<img href='url'>", "<link><img src='img.jpg'></link>"],
    },
    {
      id: 27,
      Question: "Which tag is used to define a piece of computer code?",
      Options: ["<code>", "<script>", "<pre>", "<var>"],
    },
    {
      id: 28,
      Question: "In a table, what is the correct tag for the table header section?",
      Options: ["<header>", "<th>", "<thead>", "<tcaption>"],
    },
    {
      id: 29,
      Question: "What does HTML5's Web Storage (localStorage/sessionStorage) provide?",
      Options: ["A way to store data on the server.", "A method for including external HTML files.", "A secure way to transmit data.", "A way for web pages to store key/value pairs locally within the client's browser."],
    },
    {
      id: 30,
      Question: "Which of the following is a valid way to comment in HTML?",
      Options: ["// This is a comment", "", "/* This is a comment */", "# This is a comment"],
    },
  ],
  networking: [
    {
      id: 1,
      Question: "What is an Applet?",
      Options: ["A program that can be embedded in another application", "A tag in HTML", "A security protocol", "A type of network cable"],
    },
    {
      id: 2,
      Question: "Which port is used by SMTP by default?",
      Options: ["21", "25", "80", "443"],
    },
    {
      id: 3,
      Question: "Which of the following is NOT an email protocol?",
      Options: ["POP3", "IMAP", "SMTP", "IP"],
    },
    {
      id: 4,
      Question: "What is the primary email outgoing (sending) protocol?",
      Options: ["IMAP", "POP3", "SMTP", "FTP"],
    },
    {
      id: 5,
      Question: "Which of these are incoming (receiving) email protocols?",
      Options: ["SMTP and FTP", "POP3 and IMAP", "HTTP and HTTPS", "Only SMTP"],
    },
    {
      id: 6,
      Question: "What is the function of BCC in an email?",
      Options: ["To send a copy of the email to recipients who are visible to all", "To send a copy of the email without the other recipients knowing", "To attach a carbon copy of a file", "To mark the email as high priority"],
    },
    {
      id: 7,
      Question: "What does IMAP stand for?",
      Options: ["Internet Message Access Protocol", "Internal Mail Application Protocol", "Internet Mail Access Point", "International Message Administration Protocol"],
    },
    {
      id: 8,
      Question: "What does POP3 stand for?",
      Options: ["Popular Office Protocol version 3", "Post Office Protocol version 3", "Primary Online Protocol version 3", "People on Planet version 3"],
    },
    {
      id: 9,
      Question: "Sending the same email repeatedly to a fixed address is known as?",
      Options: ["Email Spoofing", "Email Spamming", "Email Bouncing", "Email Phishing"],
    },
    {
      id: 10,
      Question: "Which part of an email address `user@example.com` represents the domain name?",
      Options: ["user", "@", "example.com", ".com"],
    },
    {
      id: 11,
      Question: "Which field in an email header contains the main message content summary?",
      Options: ["To", "From", "Subject", "Body"],
    },
    {
      id: 12,
      Question: "What is the primary difference between POP3 and IMAP?",
      Options: ["POP3 is for sending, IMAP is for receiving", "IMAP synchronizes with the server, POP3 downloads and deletes", "POP3 is more secure than IMAP", "There is no major difference"],
    },
    {
      id: 13,
      Question: "What is DNS primarily used for?",
      Options: ["To speed up internet connections", "To assign IP addresses to devices", "To translate domain names into IP addresses", "To encrypt network traffic"],
    },
    {
      id: 14,
      Question: "What is a MAC address?",
      Options: ["An address for Apple computers only", "A unique identifier assigned to a network interface controller (NIC)", "An IP address that changes dynamically", "A type of email address"],
    },
    {
      id: 15,
      Question: "What is the purpose of a Subnet Mask?",
      Options: ["To hide a computer's IP address", "To divide a network into smaller logical networks", "To connect to a Wi-Fi network", "To increase the speed of a network"],
    },
    {
      id: 16,
      Question: "Which network topology connects all devices to a central hub?",
      Options: ["Bus", "Ring", "Star", "Mesh"],
    },
    {
      id: 17,
      Question: "What layer of the OSI model is responsible for routing?",
      Options: ["Physical Layer", "Data Link Layer", "Network Layer", "Transport Layer"],
    },
    {
      id: 18,
      Question: "What is the function of a DHCP server?",
      Options: ["To translate domain names to IP addresses", "To automatically assign IP addresses to devices on a network", "To filter malicious traffic", "To store website files"],
    },
    {
      id: 19,
      Question: "Which protocol is connectionless?",
      Options: ["TCP", "UDP", "FTP", "HTTP"],
    },
    {
      id: 20,
      Question: "What is a 'port' in networking?",
      Options: ["A physical connector on a device", "A designated endpoint for communication in an operating system", "A type of network cable", "A measure of internet speed"],
    },
    {
      id: 21,
      Question: "What is NAT (Network Address Translation)?",
      Options: ["A protocol for secure email", "A method to map multiple private IP addresses to a single public IP", "A way to encrypt Wi-Fi signals", "A tool for network diagnostics"],
    },
    {
      id: 22,
      Question: "What is a VPN used for?",
      Options: ["To boost Wi-Fi signal strength", "To create a secure, encrypted connection over a public network", "To block all incoming internet traffic", "To assign static IP addresses"],
    },
    {
      id: 23,
      Question: "Which class of IP address is `192.168.1.1`?",
      Options: ["Class A", "Class B", "Class C", "Class D"],
    },
    {
      id: 24,
      Question: "What is the primary purpose of ARP (Address Resolution Protocol)?",
      Options: ["To find the IP address of a given domain name", "To find the MAC address of a device from its IP address", "To route packets between different networks", "To assign IP addresses dynamically"],
    },
    {
      id: 25,
      Question: "Which of the following is a private IP address range?",
      Options: ["8.8.8.0 /24", "172.16.0.0 /12", "204.79.197.200 /24", "1.1.1.0 /24"],
    },
    {
      id: 26,
      Question: "What is 'phishing'?",
      Options: ["A method to increase network bandwidth", "A type of network hardware", "A fraudulent attempt to obtain sensitive information by impersonating a trustworthy entity", "A protocol for file sharing"],
    },
    {
      id: 27,
      Question: "What is the loopback IP address?",
      Options: ["192.168.0.1", "10.0.0.1", "255.255.255.255", "127.0.0.1"],
    },
    {
      id: 28,
      Question: "What is the difference between a hub, a switch, and a router?",
      Options: ["They are all the same device", "A hub broadcasts to all ports, a switch to a specific port, and a router connects networks", "A switch is for wireless, a router is for wired", "A router connects devices, a switch connects networks"],
    },
    {
      id: 29,
      Question: "What does the 'S' in HTTPS stand for?",
      Options: ["Standard", "Simple", "Secure", "Server"],
    },
    {
      id: 30,
      Question: "Which command-line tool is used to test network connectivity to a host?",
      Options: ["ipconfig", "netstat", "tracert", "ping"],
    },
  ],
  photoshop: [
    {
      id: 1,
      Question: "Which color mode is specifically used for professional printing?",
      Options: ["RGB", "CMYK", "Grayscale", "LAB"],
    },
    {
      id: 2,
      Question: "What is the native file extension for a Photoshop document?",
      Options: [".tiff", ".jpg", ".psd", ".bmp"],
    },
    {
      id: 3,
      Question: "What is the shortcut key to create a duplicate of the current layer?",
      Options: ["Ctrl+N", "Ctrl+T", "Ctrl+J", "Ctrl+D"],
    },
    {
      id: 4,
      Question: "Which menu contains the 'Duplicate Layer' option?",
      Options: ["File", "Layer", "Image", "Edit"],
    },
    {
      id: 5,
      Question: "How many types of Gradients are there in Photoshop?",
      Options: ["2", "3", "5", "6"],
    },
    {
      id: 6,
      Question: "Which of the following is a common layer blending mode?",
      Options: ["Contrast", "Overlay", "Brightness", "Saturation"],
    },
    {
      id: 7,
      Question: "To access the Desaturate command, which menu path would you follow?",
      Options: ["File > Export", "Layer > New Adjustment Layer", "Image > Adjustments", "Filter > Color"],
    },
    {
      id: 8,
      Question: "What is the primary purpose of a Layer Mask?",
      Options: ["To permanently delete parts of a layer", "To apply a filter to a specific area", "To non-destructively hide or reveal parts of a layer", "To merge two layers together"],
    },
    {
      id: 9,
      Question: "What is the key difference between Opacity and Fill for a layer?",
      Options: ["There is no difference", "Opacity affects the entire layer including layer styles, while Fill does not affect layer styles", "Fill affects the entire layer, while Opacity only affects the layer styles", "Opacity is measured in pixels, Fill is in percentage"],
    },
    {
      id: 10,
      Question: "What does converting a layer to a 'Smart Object' allow you to do?",
      Options: ["Merge the layer with the background", "Lock the layer to prevent editing", "Apply non-destructive transformations and filters", "Automatically correct the colors of the layer"],
    },
    {
      id: 11,
      Question: "Which tool is best for creating scalable vector paths?",
      Options: ["Brush Tool", "Lasso Tool", "Pen Tool", "Marquee Tool"],
    },
    {
      id: 12,
      Question: "What does the term 'rasterize' mean in Photoshop?",
      Options: ["To convert a vector layer into a pixel-based layer", "To save the image for the web", "To apply a color filter", "To resize an image without losing quality"],
    },
    {
      id: 13,
      Question: "What is the function of the 'Content-Aware Fill' feature?",
      Options: ["To adjust the brightness and contrast", "To fill a selection with content that matches its surroundings", "To select an area based on its color", "To convert an image to black and white"],
    },
    {
      id: 14,
      Question: "What is 'color gamut'?",
      Options: ["A type of gradient", "A tool for selecting colors", "The range of colors that a device can reproduce or capture", "A filter for changing color balance"],
    },
    {
      id: 15,
      Question: "Which keyboard shortcut resets the foreground and background colors to black and white?",
      Options: ["X", "D", "Ctrl+D", "Alt+Backspace"],
    },
    {
      id: 16,
      Question: "In Photoshop, what is a 'Path'?",
      Options: ["A pixel-based selection border", "A vector-based outline made of anchor points and lines", "The file location of the image", "A type of layer style"],
    },
    {
      id: 17,
      Question: "What is the main purpose of 'Adjustment Layers'?",
      Options: ["To draw shapes and lines", "To apply color and tonal adjustments non-destructively", "To add text to an image", "To permanently change the pixels of a layer"],
    },
    {
      id: 18,
      Question: "Which tool would you use to correct small blemishes or imperfections in a photo?",
      Options: ["Clone Stamp Tool", "Spot Healing Brush Tool", "Dodge Tool", "Blur Tool"],
    },
    {
      id: 19,
      Question: "What does 'flattening' an image do?",
      Options: ["It increases the image resolution", "It converts the image to black and white", "It merges all visible layers into a single background layer", "It saves a backup copy of the file"],
    },
    {
      id: 20,
      Question: "What is the function of the 'Liquify' filter?",
      Options: ["To convert a solid layer to a liquid state", "To push, pull, rotate, and distort pixels in an image", "To apply a water-like texture", "To clean up imperfections in the image"],
    },
    {
      id: 21,
      Question: "What does anti-aliasing do to text and selections?",
      Options: ["Makes edges sharper and more pixelated", "Smooths jagged edges by blending colors", "Converts text to a vector shape", "Increases the font size"],
    },
    {
      id: 22,
      Question: "What is the primary function of the 'History Panel'?",
      Options: ["To save the file automatically", "To view historical art movements", "To see a list of recent edits and revert to a previous state", "To manage color history"],
    },
    {
      id: 23,
      Question: "Which color model is based on human perception of color?",
      Options: ["RGB", "CMYK", "HSB", "Lab Color"],
    },
    {
      id: 24,
      Question: "Which tool allows you to select areas of similar color with a single click?",
      Options: ["Lasso Tool", "Magic Wand Tool", "Pen Tool", "Quick Selection Tool"],
    },
    {
      id: 25,
      Question: "What is a 'clipping mask'?",
      Options: ["A tool for cutting out a part of an image", "A layer whose shape masks other layers above it", "A type of selection tool", "A filter that clips highlights"],
    },
    {
      id: 26,
      Question: "Which file format supports transparency?",
      Options: ["JPEG", "BMP", "PNG", "TIFF (without layers)"],
    },
    {
      id: 27,
      Question: "What does the 'Dodge' tool do?",
      Options: ["Darkens areas of an image", "Lightens areas of an image", "Increases color saturation", "Blurs areas of an image"],
    },
    {
      id: 28,
      Question: "What unit is 'Resolution' typically measured in for print?",
      Options: ["Pixels per Inch (PPI)", "Dots per Inch (DPI)", "Megapixels (MP)", "Centimeters (cm)"],
    },
    {
      id: 29,
      Question: "Which shortcut activates the Free Transform tool?",
      Options: ["Ctrl+T", "Ctrl+F", "Ctrl+E", "Ctrl+L"],
    },
    {
      id: 30,
      Question: "What is a 'Histogram' in Photoshop?",
      Options: ["A list of all actions performed", "A graphical representation of the tonal range of an image", "A tool for creating geometric shapes", "A type of color palette"],
    },
  ],
};

export default function App() {
    const[step,setStep] = useState(0);
    const[student,setStudent] = useState({name:"",rollno:"",subject:""});
    const[questions,setQuestions] = useState([]);
    const[answers,setAnswers] = useState([]);
    const[score,setScore] = useState(0);
    const handleStudentSubmit=(data)=>{
        setStudent(data);
        console.log(data);
        setStep(1);
        setQuestions(questionsbysubject[data.subject]||[]);
    }
    const handleAnswerSubmit=(answer)=>{
        const newanswers=[...answers,answer];
        setAnswers(newanswers);
        if(step<questions.length)
        {
            setStep(step+1);
        }
        else{
           const correctanswers = {
                                    hardware: {
                                        1: "CPU",
                                        2: "Hard Disk Drive",
                                        3: "RAM",
                                        4: "To protect against unauthorized access",
                                        5: "To perform arithmetic and logic operations",
                                        6: "Linux",
                                        7: "F2",
                                        8: "Microsoft Access",
                                        9: "To improve visual output and graphics performance",
                                        10: "Motherboard",
                                        11: "To direct network traffic between devices",
                                        12: "To speed up data access from the main memory",
                                        13: "HTTPS",
                                        14: "Hard Disk Drive (HDD)",
                                        15: "Alt + F4",
                                        16: "SMTP",
                                        17: "Starting up the computer and loading the OS",
                                        18: "Wi-Fi Adapter",
                                        19: "Basic Input Output System",
                                        20: "Motherboard",
                                        21: "Manage communication between CPU, RAM, and graphics card",
                                        22: "Thunderbolt 3",
                                        23: "The time delay to locate and retrieve data",
                                        24: "A protective measure that reduces CPU speed to lower temperature",
                                        25: "Power-On Self-Test",
                                        26: "Flash Memory",
                                        27: "Hertz (Hz)",
                                        28: "Connecting storage drives like SSDs and HDDs",
                                        29: "Redundant Array of Independent Disks",
                                        30: "A GPU has many cores for parallel tasks, while a CPU has few for serial tasks",
                                    },
                                    html: {
                                        1: "<meta>",
                                        2: '<a href="url" target="_blank">',
                                        3: "<div>",
                                        4: "alt",
                                        5: "<select>",
                                        6: "/",
                                        7: "It executes the script after the page has finished parsing.",
                                        8: "<hr>",
                                        9: "<main>",
                                        10: "The color of a visited link",
                                        11: "<img>",
                                        12: '<ol start="5">',
                                        13: "colspan='2'",
                                        14: "<input type='datetime-local'>",
                                        15: "To draw graphics on the fly via scripting (JavaScript).",
                                        16: "<nav>",
                                        17: "<b> is for bold text, while <strong> is for strong importance.",
                                        18: "placeholder",
                                        19: "An attribute to store custom data private to the page or application.",
                                        20: "<base>",
                                        21: "Accessible Rich Internet Applications",
                                        22: "<meta charset='UTF-8'>",
                                        23: "<sub>",
                                        24: "To declare the human language of the document for accessibility.",
                                        25: "<meter>",
                                        26: "<a href='url'><img src='img.jpg'></a>",
                                        27: "<code>",
                                        28: "<thead>",
                                        29: "A way for web pages to store key/value pairs locally within the client's browser.",
                                        30: "",
                                    },
                                    networking: {
                                        1: "A program that can be embedded in another application",
                                        2: "25",
                                        3: "IP",
                                        4: "SMTP",
                                        5: "POP3 and IMAP",
                                        6: "To send a copy of the email without the other recipients knowing",
                                        7: "Internet Message Access Protocol",
                                        8: "Post Office Protocol version 3",
                                        9: "Email Spamming",
                                        10: "example.com",
                                        11: "Subject",
                                        12: "IMAP synchronizes with the server, POP3 downloads and deletes",
                                        13: "To translate domain names into IP addresses",
                                        14: "A unique identifier assigned to a network interface controller (NIC)",
                                        15: "To divide a network into smaller logical networks",
                                        16: "Star",
                                        17: "Network Layer",
                                        18: "To automatically assign IP addresses to devices on a network",
                                        19: "UDP",
                                        20: "A designated endpoint for communication in an operating system",
                                        21: "A method to map multiple private IP addresses to a single public IP",
                                        22: "To create a secure, encrypted connection over a public network",
                                        23: "Class C",
                                        24: "To find the MAC address of a device from its IP address",
                                        25: "172.16.0.0 /12",
                                        26: "A fraudulent attempt to obtain sensitive information by impersonating a trustworthy entity",
                                        27: "127.0.0.1",
                                        28: "A hub broadcasts to all ports, a switch to a specific port, and a router connects networks",
                                        29: "Secure",
                                        30: "ping",
                                    },
                                    photoshop: {
                                        1: "CMYK",
                                        2: ".psd",
                                        3: "Ctrl+J",
                                        4: "Layer",
                                        5: "5",
                                        6: "Overlay",
                                        7: "Image > Adjustments",
                                        8: "To non-destructively hide or reveal parts of a layer",
                                        9: "Opacity affects the entire layer including layer styles, while Fill does not affect layer styles",
                                        10: "Apply non-destructive transformations and filters",
                                        11: "Pen Tool",
                                        12: "To convert a vector layer into a pixel-based layer",
                                        13: "To fill a selection with content that matches its surroundings",
                                        14: "The range of colors that a device can reproduce or capture",
                                        15: "D",
                                        16: "A vector-based outline made of anchor points and lines",
                                        17: "To apply color and tonal adjustments non-destructively",
                                        18: "Spot Healing Brush Tool",
                                        19: "It merges all visible layers into a single background layer",
                                        20: "To push, pull, rotate, and distort pixels in an image",
                                        21: "Smooths jagged edges by blending colors",
                                        22: "To see a list of recent edits and revert to a previous state",
                                        23: "Lab Color",
                                        24: "Magic Wand Tool",
                                        25: "A layer whose shape masks other layers above it",
                                        26: "PNG",
                                        27: "Lightens areas of an image",
                                        28: "Dots per Inch (DPI)",
                                        29: "Ctrl+T",
                                        30: "A graphical representation of the tonal range of an image",
                                    },
                                    };
          var calculatedscore = newanswers.filter(
                ans => correctanswers[student.subject][String(ans.question_id)] === ans.answer
        ).length;


            setScore(calculatedscore); 

            console.log("Final Score:", calculatedscore);

            axios.post("https://examportal-q00f.onrender.com/submit", {
                name: student.name,
                rollno: student.rollno,
                subject: student.subject,
                answers: newanswers,
                score: calculatedscore
            }).then(() => {
                alert("Submitted successfully");
                setStep(step + 1);
            });

        }
        
    }
    return(
            <div className="app-container">
            <Label/>
            {step === 0 && <StudentForm onSubmit={handleStudentSubmit} onViewResults={() => setStep(-1)} />}
            {step > 0 && step <= questions.length && (
                <Question data={questions[step - 1]} onAnswer={handleAnswerSubmit} />
            )}
            {step === questions.length + 1 && (
                <ResultDisplay student={student} score={score} totalquestion={questions.length} />
            )}
            {step === -1 && <DisplayResult />} 
            </div>

    );
       
}