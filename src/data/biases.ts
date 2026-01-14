export interface BiasPost {
  id: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
  };
  text: string;
  engagement: {
    likes: number;
    retweets: number;
    replies: number;
  };
  correctAnswer: string;
  options: string[];
  explanation: string;
}

export const biasPosts: BiasPost[] = [
  {
    id: "1",
    author: {
      name: "Tech Entrepreneur",
      handle: "@techguru",
      avatar: "🚀"
    },
    text: "I dropped out of college and built a million-dollar company. College is clearly a waste of time and money. Real entrepreneurs don't need degrees!",
    engagement: {
      likes: 2847,
      retweets: 891,
      replies: 234
    },
    correctAnswer: "Survivorship Bias",
    options: ["Survivorship Bias", "Confirmation Bias", "Appeal to Authority", "Bandwagon Effect"],
    explanation: "This is survivorship bias because the author focuses only on successful dropouts while ignoring the many who dropped out and failed. The sample is skewed toward survivors of the risky choice."
  },
  {
    id: "2",
    author: {
      name: "Climate Researcher",
      handle: "@climatesci",
      avatar: "🌡️"
    },
    text: "The temperature dropped 5°F this week! So much for global warming. These scientists keep changing their story - first it was cooling, then warming, now 'climate change.' Make up your minds!",
    engagement: {
      likes: 3421,
      retweets: 1876,
      replies: 445
    },
    correctAnswer: "False Dichotomy",
    options: ["False Dichotomy", "Cherry Picking", "Straw Man", "Hasty Generalization"],
    explanation: "This presents a false dichotomy by implying climate science must be either completely right or completely wrong, ignoring the nuanced evolution of scientific understanding and the difference between local weather and global climate patterns."
  },
  {
    id: "3",
    author: {
      name: "Investment Advisor",
      handle: "@wallstreetwise",
      avatar: "💰"
    },
    text: "My stock picking system has beaten the market 8 times out of the last 10 quarters. Past performance clearly indicates future success - invest with confidence!",
    engagement: {
      likes: 2156,
      retweets: 892,
      replies: 234
    },
    correctAnswer: "Gambler's Fallacy",
    options: ["Gambler's Fallacy", "Survivorship Bias", "Post Hoc Fallacy", "Regression to Mean"],
    explanation: "This is the gambler's fallacy - assuming past performance predicts future results. The advisor wrongly believes that past wins increase the probability of future wins, when each market period is largely independent."
  },
  {
    id: "4",
    author: {
      name: "Health Blogger",
      handle: "@naturalhealth",
      avatar: "🌿"
    },
    text: "Since I started taking turmeric supplements, I haven't gotten sick once. Before that, I was getting colds every few months. This proves turmeric prevents illness!",
    engagement: {
      likes: 1834,
      retweets: 567,
      replies: 123
    },
    correctAnswer: "Post Hoc Fallacy",
    options: ["Post Hoc Fallacy", "Confirmation Bias", "Correlation vs Causation", "Anecdotal Evidence"],
    explanation: "This is post hoc ergo propter hoc (after this, therefore because of this). The blogger assumes that because wellness followed taking turmeric, the turmeric caused the wellness, ignoring other factors like seasonal changes, lifestyle improvements, or natural variance in health."
  },
  {
    id: "5",
    author: {
      name: "Business Coach",
      handle: "@successmindset",
      avatar: "📈"
    },
    text: "You either have an abundance mindset or a scarcity mindset - there's no in-between. Successful people think abundantly, unsuccessful people think scarcely. Choose your mindset!",
    engagement: {
      likes: 4567,
      retweets: 2134,
      replies: 789
    },
    correctAnswer: "False Dichotomy",
    options: ["False Dichotomy", "Appeal to Emotion", "Hasty Generalization", "Circular Reasoning"],
    explanation: "This creates a false dichotomy by presenting only two extreme options when mindset exists on a spectrum. It oversimplifies complex psychological and economic factors that contribute to success, forcing people into binary categories."
  },
  {
    id: "6",
    author: {
      name: "Diet Influencer",
      handle: "@ketolife",
      avatar: "🥑"
    },
    text: "My friend lost 30 pounds in 2 months on keto, my cousin lost 25 pounds, and I lost 40! This diet works for everyone. Don't let anyone tell you otherwise - the results speak for themselves!",
    engagement: {
      likes: 3245,
      retweets: 1432,
      replies: 567
    },
    correctAnswer: "Anecdotal Evidence",
    options: ["Anecdotal Evidence", "Cherry Picking", "Survivorship Bias", "Hasty Generalization"],
    explanation: "This relies on anecdotal evidence - personal stories that don't constitute scientific proof. The influencer uses individual success stories to make broad claims about universal effectiveness, ignoring failed attempts and individual variation."
  },
  {
    id: "7",
    author: {
      name: "Political Commentator",
      handle: "@punditpro",
      avatar: "🎙️"
    },
    text: "My opponent wants to reduce military spending. This means they hate our troops and want America to be defenseless against our enemies. How can we trust someone who doesn't support our heroes?",
    engagement: {
      likes: 2789,
      retweets: 1156,
      replies: 445
    },
    correctAnswer: "Straw Man",
    options: ["Straw Man", "Ad Hominem", "False Dichotomy", "Appeal to Emotion"],
    explanation: "This is a straw man fallacy - misrepresenting the opponent's position to make it easier to attack. Reducing military spending doesn't equal hating troops or wanting defenselessness, but this extreme characterization is easier to argue against."
  },
  {
    id: "8",
    author: {
      name: "Tech Analyst",
      handle: "@techcrunch",
      avatar: "💻"
    },
    text: "Every major tech breakthrough in history - internet, smartphones, social media - was initially dismissed by experts. Since experts are criticizing AI now, this proves AI will be revolutionary!",
    engagement: {
      likes: 5432,
      retweets: 2876,
      replies: 1234
    },
    correctAnswer: "Survivorship Bias",
    options: ["Survivorship Bias", "False Analogy", "Appeal to Ignorance", "Hasty Generalization"],
    explanation: "This is survivorship bias - only remembering the technologies that succeeded after initial skepticism, while ignoring countless technologies that were correctly dismissed by experts and never succeeded."
  },
  {
    id: "9",
    author: {
      name: "Lifestyle Guru",
      handle: "@mindfulnow",
      avatar: "🧘"
    },
    text: "Meditation cured my anxiety completely. If you're still anxious, you're just not meditating correctly or consistently enough. True commitment to the practice eliminates all mental suffering.",
    engagement: {
      likes: 1987,
      retweets: 743,
      replies: 234
    },
    correctAnswer: "No True Scotsman",
    options: ["No True Scotsman", "Appeal to Purity", "Victim Blaming", "Survivorship Bias"],
    explanation: "This is the 'No True Scotsman' fallacy - when faced with counterexamples (people who meditate but still have anxiety), the response is that they're not doing it 'correctly' rather than questioning the universal claim."
  },
  {
    id: "10",
    author: {
      name: "Startup Founder",
      handle: "@disruptornow",
      avatar: "⚡"
    },
    text: "We're not just a rideshare company - we're revolutionizing transportation! We're not just a food delivery app - we're transforming how people eat! Innovation requires thinking beyond traditional categories!",
    engagement: {
      likes: 3567,
      retweets: 1789,
      replies: 432
    },
    correctAnswer: "Moving the Goalposts",
    options: ["Moving the Goalposts", "Appeal to Novelty", "Buzzword Fallacy", "Red Herring"],
    explanation: "This moves the goalposts by redefining the business whenever faced with criticism or competition, making it impossible to pin down exactly what the company does or evaluate its actual performance."
  },
  {
    id: "11",
    author: {
      name: "Vaccine Researcher",
      handle: "@pharmawatch",
      avatar: "💉"
    },
    text: "The measles vaccine has a 97% effectiveness rate, but I know three kids who got vaccinated and still caught measles. This proves vaccines don't work and the 97% number is fake!",
    engagement: {
      likes: 2345,
      retweets: 1123,
      replies: 567
    },
    correctAnswer: "Base Rate Neglect",
    options: ["Base Rate Neglect", "Anecdotal Evidence", "Hasty Generalization", "Cherry Picking"],
    explanation: "This shows base rate neglect - ignoring that a 97% effectiveness rate means 3% will still get sick. The person's anecdotal experience aligns with the statistical expectation but they interpret it as evidence against the vaccine."
  },
  {
    id: "12",
    author: {
      name: "Economic Analyst",
      handle: "@marketexpert",
      avatar: "📊"
    },
    text: "Unemployment dropped from 6% to 5.8% after the new policy was implemented. This 0.2% decrease clearly demonstrates the policy's effectiveness in job creation.",
    engagement: {
      likes: 1876,
      retweets: 654,
      replies: 234
    },
    correctAnswer: "Post Hoc Fallacy",
    options: ["Post Hoc Fallacy", "Statistical Insignificance", "Correlation vs Causation", "Cherry Picking"],
    explanation: "This is post hoc fallacy - assuming the policy caused the employment change simply because it followed the policy implementation. The change could be due to seasonal factors, ongoing economic trends, or statistical noise."
  },
  {
    id: "13",
    author: {
      name: "Educational Expert",
      handle: "@learnmore",
      avatar: "📚"
    },
    text: "Students who take advanced math courses score higher on college entrance exams. Therefore, requiring all students to take calculus will improve everyone's test scores.",
    engagement: {
      likes: 2567,
      retweets: 987,
      replies: 345
    },
    correctAnswer: "Survivorship Bias",
    options: ["Survivorship Bias", "False Cause", "Hasty Generalization", "Selection Bias"],
    explanation: "This is survivorship bias - students who choose advanced math are already motivated and capable, so their higher scores may not be caused by the math itself but by the selection process of who takes these courses."
  },
  {
    id: "14",
    author: {
      name: "Social Media Manager",
      handle: "@viralcontent",
      avatar: "📱"
    },
    text: "Our video got 1 million views in 24 hours! This proves our content strategy is the best in the industry. Other companies should copy our approach for guaranteed viral success.",
    engagement: {
      likes: 4321,
      retweets: 2109,
      replies: 678
    },
    correctAnswer: "Cherry Picking",
    options: ["Cherry Picking", "Single Sample Fallacy", "Post Hoc Fallacy", "Appeal to Numbers"],
    explanation: "This is cherry picking - selecting one successful example while ignoring all the content that didn't go viral. One viral video doesn't validate an entire strategy, especially without considering the role of luck and timing."
  },
  {
    id: "15",
    author: {
      name: "Nutrition Coach",
      handle: "@eatclean",
      avatar: "🥬"
    },
    text: "Processed foods contain chemicals, and chemicals are bad for you. Natural foods don't have chemicals. Choose natural foods for optimal health!",
    engagement: {
      likes: 3789,
      retweets: 1654,
      replies: 432
    },
    correctAnswer: "Naturalistic Fallacy",
    options: ["Naturalistic Fallacy", "Chemical Fallacy", "False Dichotomy", "Appeal to Nature"],
    explanation: "This is the naturalistic fallacy - assuming 'natural' equals 'good' and 'artificial' equals 'bad.' All matter is made of chemicals, and many natural substances are toxic while many synthetic ones are beneficial."
  },
  {
    id: "16",
    author: {
      name: "Crime Analyst",
      handle: "@safetyfirst",
      avatar: "🚨"
    },
    text: "Crime rates are 50% higher in neighborhoods with more streetlights. This proves that streetlights attract criminal activity. We should remove streetlights to reduce crime!",
    engagement: {
      likes: 1543,
      retweets: 678,
      replies: 234
    },
    correctAnswer: "Correlation vs Causation",
    options: ["Correlation vs Causation", "Reverse Causation", "Confounding Variables", "Statistical Error"],
    explanation: "This confuses correlation with causation. Streetlights are installed in areas with more foot traffic and commercial activity, which naturally have more reported crime. The streetlights don't cause crime; they're placed where crime is more likely to occur."
  },
  {
    id: "17",
    author: {
      name: "Productivity Expert",
      handle: "@worksmarter",
      avatar: "⏰"
    },
    text: "I wake up at 4 AM every day and I'm incredibly successful. All successful people wake up early. If you want to be successful, you must wake up before 5 AM - there's no other way.",
    engagement: {
      likes: 4876,
      retweets: 2341,
      replies: 567
    },
    correctAnswer: "False Cause",
    options: ["False Cause", "Hasty Generalization", "Single Cause Fallacy", "Survivorship Bias"],
    explanation: "This assumes early rising causes success (false cause) and that it's the only path to success (single cause fallacy). Success has many contributing factors, and many successful people don't wake up early."
  },
  {
    id: "18",
    author: {
      name: "Psychology Student",
      handle: "@mindreader",
      avatar: "🧠"
    },
    text: "Studies show that people who eat chocolate are happier. Therefore, eating more chocolate will make you happier. I recommend eating chocolate daily for better mental health!",
    engagement: {
      likes: 2765,
      retweets: 1234,
      replies: 456
    },
    correctAnswer: "Correlation vs Causation",
    options: ["Correlation vs Causation", "Reverse Causation", "Third Variable Problem", "Misinterpretation"],
    explanation: "This mistakes correlation for causation. Happy people might be more likely to treat themselves to chocolate, or both happiness and chocolate consumption might be influenced by other factors like disposable income or social situations."
  },
  {
    id: "19",
    author: {
      name: "Environmental Activist",
      handle: "@greenplanet",
      avatar: "🌍"
    },
    text: "Either we ban all fossil fuels immediately, or we destroy the planet completely. There's no middle ground when it comes to environmental destruction. Choose: economy or survival.",
    engagement: {
      likes: 5432,
      retweets: 2876,
      replies: 1234
    },
    correctAnswer: "False Dichotomy",
    options: ["False Dichotomy", "Appeal to Fear", "Slippery Slope", "Appeal to Consequences"],
    explanation: "This creates a false dichotomy by presenting only two extreme options when many gradual transition strategies exist. It forces an all-or-nothing choice while ignoring moderate solutions and technological alternatives."
  },
  {
    id: "20",
    author: {
      name: "Language Purist",
      handle: "@properenglish",
      avatar: "📖"
    },
    text: "Texting abbreviations and social media slang are destroying the English language. Young people can't spell anymore, and literature is dying. Shakespeare is rolling in his grave!",
    engagement: {
      likes: 3456,
      retweets: 1567,
      replies: 789
    },
    correctAnswer: "Appeal to Tradition",
    options: ["Appeal to Tradition", "Slippery Slope", "Hasty Generalization", "False Cause"],
    explanation: "This appeals to tradition by assuming older forms of language are inherently better. Language naturally evolves, and Shakespeare himself was criticized for using 'vulgar' English instead of Latin. New communication forms don't destroy language; they expand it."
  },
  {
    id: "21",
    author: {
      name: "Relationship Coach",
      handle: "@lovelaws",
      avatar: "💕"
    },
    text: "Every happy couple I counsel follows the same three rules I teach. Coincidence? I think not! These rules guarantee relationship success - that's why my clients stay together.",
    engagement: {
      likes: 2890,
      retweets: 1345,
      replies: 567
    },
    correctAnswer: "Survivorship Bias",
    options: ["Survivorship Bias", "Selection Bias", "Confirmation Bias", "Post Hoc Fallacy"],
    explanation: "This is survivorship bias - only the couples who stayed together continued counseling to become part of the sample. Couples who broke up likely stopped coming, so they're not counted in the 'success' statistics."
  },
  {
    id: "22",
    author: {
      name: "Cybersecurity Expert",
      handle: "@hackerproof",
      avatar: "🔒"
    },
    text: "My security software has never been hacked. No one has ever reported a successful attack. This proves it's 100% secure and unhackable. Invest in proven protection!",
    engagement: {
      likes: 1987,
      retweets: 743,
      replies: 234
    },
    correctAnswer: "Argument from Ignorance",
    options: ["Argument from Ignorance", "Survivorship Bias", "False Confidence", "Burden of Proof"],
    explanation: "This is argument from ignorance - assuming something is true because it hasn't been proven false. The lack of reported hacks doesn't prove the software is secure; it could mean hacks went undetected or unreported."
  },
  {
    id: "23",
    author: {
      name: "Market Researcher",
      handle: "@consumerdata",
      avatar: "📊"
    },
    text: "We surveyed 1000 customers who bought our premium product, and 95% said they're satisfied! This proves our product is superior to all competitors in the market.",
    engagement: {
      likes: 2456,
      retweets: 987,
      replies: 234
    },
    correctAnswer: "Selection Bias",
    options: ["Selection Bias", "Survivorship Bias", "Sampling Error", "Cherry Picking"],
    explanation: "This suffers from selection bias - only surveying existing customers who already chose to buy excludes those who chose competitors or decided not to buy at all. The sample isn't representative of the broader market."
  },
  {
    id: "24",
    author: {
      name: "Fitness Influencer",
      handle: "@sweatdaily",
      avatar: "🏋️"
    },
    text: "I've been doing the same workout routine for 5 years and I'm in the best shape of my life. Everyone should do exactly what I do - this routine is scientifically perfect!",
    engagement: {
      likes: 4321,
      retweets: 1876,
      replies: 654
    },
    correctAnswer: "Anecdotal Evidence",
    options: ["Anecdotal Evidence", "Hasty Generalization", "Single Sample Fallacy", "Appeal to Personal Experience"],
    explanation: "This relies on anecdotal evidence - one person's experience doesn't constitute scientific proof. What works for one individual may not work for others due to genetics, lifestyle, starting point, and countless other variables."
  },
  {
    id: "25",
    author: {
      name: "Real Estate Agent",
      handle: "@propertypro",
      avatar: "🏠"
    },
    text: "Home prices in this neighborhood have gone up every year for the past 5 years. This trend will definitely continue - buy now before prices get even higher! It's a guaranteed investment!",
    engagement: {
      likes: 3567,
      retweets: 1432,
      replies: 567
    },
    correctAnswer: "Gambler's Fallacy",
    options: ["Gambler's Fallacy", "Hot Hand Fallacy", "Extrapolation Error", "Trend Continuation Bias"],
    explanation: "This is the gambler's fallacy in reverse (hot hand fallacy) - assuming that because prices went up in the past, they'll continue going up. Real estate markets are complex and past performance doesn't guarantee future results."
  },
  {
    id: "26",
    author: {
      name: "Academic Researcher",
      handle: "@studysmart",
      avatar: "🔬"
    },
    text: "Our study shows that people who drink coffee live longer. The mechanism is unclear, but the correlation is strong. I recommend everyone drink 3-4 cups daily for longevity!",
    engagement: {
      likes: 2789,
      retweets: 1234,
      replies: 456
    },
    correctAnswer: "Correlation vs Causation",
    options: ["Correlation vs Causation", "Confounding Variables", "Third Variable Problem", "Hasty Generalization"],
    explanation: "This jumps from correlation to causation without considering confounding variables. Coffee drinkers might have other lifestyle factors (higher income, better healthcare access, social connections) that actually contribute to longevity."
  },
  {
    id: "27",
    author: {
      name: "Political Strategist",
      handle: "@pollwatch",
      avatar: "🗳️"
    },
    text: "Our candidate is leading in the polls by 3 points with a margin of error of ±4%. This means we're definitely winning! Victory is assured - the numbers don't lie!",
    engagement: {
      likes: 1987,
      retweets: 743,
      replies: 234
    },
    correctAnswer: "Statistical Insignificance",
    options: ["Statistical Insignificance", "Margin of Error Misunderstanding", "False Precision", "Overconfidence Bias"],
    explanation: "This misunderstands statistical significance. A 3-point lead with a ±4% margin of error means the race could range from a 7-point lead to a 1-point deficit, making the result statistically meaningless."
  },
  {
    id: "28",
    author: {
      name: "Tech Journalist",
      handle: "@techtrends",
      avatar: "💻"
    },
    text: "Every disruptive technology follows the same adoption curve. Since this new blockchain platform is following that curve, it will definitely become mainstream and replace current systems.",
    engagement: {
      likes: 4567,
      retweets: 2109,
      replies: 789
    },
    correctAnswer: "Survivorship Bias",
    options: ["Survivorship Bias", "Pattern Recognition Error", "False Analogy", "Confirmation Bias"],
    explanation: "This is survivorship bias - only successful technologies are remembered for following the adoption curve, while countless failed technologies that showed similar early patterns are forgotten."
  },
  {
    id: "29",
    author: {
      name: "Medical Practitioner",
      handle: "@holistichealth",
      avatar: "⚕️"
    },
    text: "Pharmaceutical companies profit from sick people, so they have no incentive to cure diseases. Natural remedies threaten their business model, which is why they're suppressed by mainstream medicine.",
    engagement: {
      likes: 3456,
      retweets: 1654,
      replies: 567
    },
    correctAnswer: "Conspiracy Theory",
    options: ["Conspiracy Theory", "Ad Hominem", "Poisoning the Well", "False Motive"],
    explanation: "This promotes conspiracy thinking by assuming malicious intent without evidence. It ignores that pharmaceutical companies profit more from effective treatments (which build reputation and market share) and that natural compounds are often studied and developed into medicines."
  },
  {
    id: "30",
    author: {
      name: "Sports Commentator",
      handle: "@sportsstats",
      avatar: "⚽"
    },
    text: "This team has won their last 6 games when wearing their red jerseys. They're wearing red today, so they'll definitely win! The jersey streak continues!",
    engagement: {
      likes: 2345,
      retweets: 987,
      replies: 234
    },
    correctAnswer: "Post Hoc Fallacy",
    options: ["Post Hoc Fallacy", "Gambler's Fallacy", "Superstitious Thinking", "Pattern Seeking"],
    explanation: "This is post hoc fallacy - assuming the jersey color caused the wins when it's likely coincidental. The wins were probably due to player performance, opponent quality, and other game factors unrelated to uniform color."
  },
  {
    id: "31",
    author: {
      name: "Education Reformer",
      handle: "@schoolchange",
      avatar: "🎓"
    },
    text: "Finland has the world's best education system and they have no standardized testing. Therefore, eliminating all standardized tests will automatically give us the best education system too.",
    engagement: {
      likes: 3789,
      retweets: 1567,
      replies: 456
    },
    correctAnswer: "False Analogy",
    options: ["False Analogy", "Single Factor Fallacy", "Hasty Generalization", "Cherry Picking"],
    explanation: "This makes a false analogy by assuming what works in Finland will work elsewhere, ignoring cultural, economic, and structural differences. Finland's success involves many factors beyond just the absence of standardized testing."
  },
  {
    id: "32",
    author: {
      name: "Climate Activist",
      handle: "@climateaction",
      avatar: "🌡️"
    },
    text: "CO2 levels were much higher millions of years ago and life flourished then. This proves that current CO2 increases won't harm the planet or humanity. Earth has survived worse before!",
    engagement: {
      likes: 2567,
      retweets: 1234,
      replies: 567
    },
    correctAnswer: "False Analogy",
    options: ["False Analogy", "Cherry Picking", "Survivorship Bias", "Appeal to Nature"],
    explanation: "This makes a false analogy between ancient Earth conditions and today. Millions of years ago, life was completely different (no human civilization, different species), continents were in different positions, and change happened over geological timescales, not decades."
  },
  {
    id: "33",
    author: {
      name: "Cryptocurrency Trader",
      handle: "@cryptoprofit",
      avatar: "📈"
    },
    text: "Bitcoin hit a new all-time high! Everyone who said crypto was a bubble looks foolish now. This proves crypto is the future and traditional investing is obsolete!",
    engagement: {
      likes: 5432,
      retweets: 2876,
      replies: 1234
    },
    correctAnswer: "Cherry Picking",
    options: ["Cherry Picking", "Recency Bias", "Confirmation Bias", "Appeal to Novelty"],
    explanation: "This cherry picks one data point (a price high) while ignoring the overall volatility and previous crashes. One price movement doesn't validate long-term predictions about the future of finance."
  },
  {
    id: "34",
    author: {
      name: "Nutrition Scientist",
      handle: "@foodscience",
      avatar: "🧬"
    },
    text: "Our lab study showed that rats fed high amounts of artificial sweetener developed tumors. This proves that diet sodas cause cancer in humans and should be banned immediately!",
    engagement: {
      likes: 4321,
      retweets: 1987,
      replies: 654
    },
    correctAnswer: "False Analogy",
    options: ["False Analogy", "Hasty Generalization", "Extrapolation Error", "Dose Fallacy"],
    explanation: "This makes a false analogy between rats and humans, and between massive lab doses and normal consumption levels. Animal studies don't directly translate to human effects, especially at different dosage levels."
  },
  {
    id: "35",
    author: {
      name: "Social Media Expert",
      handle: "@viralguru",
      avatar: "📱"
    },
    text: "Every successful influencer I know started posting daily at exactly 7 AM. They all say this timing is crucial for growth. If you want to go viral, you must post at 7 AM every single day!",
    engagement: {
      likes: 3456,
      retweets: 1567,
      replies: 789
    },
    correctAnswer: "Survivorship Bias",
    options: ["Survivorship Bias", "Post Hoc Fallacy", "Anecdotal Evidence", "Hasty Generalization"],
    explanation: "This is survivorship bias - only looking at successful influencers who happened to post at 7 AM, while ignoring all the unsuccessful accounts that also posted at 7 AM, or successful accounts that posted at different times."
  },
  {
    id: "36",
    author: {
      name: "Life Coach",
      handle: "@positivevibes",
      avatar: "✨"
    },
    text: "Negative thoughts attract negative outcomes through the law of attraction. If bad things happen to you, it's because you're thinking negatively. Take responsibility for your energy!",
    engagement: {
      likes: 2789,
      retweets: 1234,
      replies: 456
    },
    correctAnswer: "Victim Blaming",
    options: ["Victim Blaming", "Just-World Fallacy", "Magical Thinking", "Confirmation Bias"],
    explanation: "This engages in victim blaming by suggesting that people are responsible for negative events through their thoughts alone, ignoring systemic issues, random chance, and external factors beyond individual control."
  },
  {
    id: "37",
    author: {
      name: "Historical Analyst",
      handle: "@pastlessons",
      avatar: "📜"
    },
    text: "Every major civilization that debased its currency collapsed within 50 years. The US left the gold standard 50 years ago. History is repeating itself - economic collapse is inevitable!",
    engagement: {
      likes: 3567,
      retweets: 1789,
      replies: 567
    },
    correctAnswer: "False Pattern",
    options: ["False Pattern", "Post Hoc Fallacy", "Cherry Picking", "Historical Fallacy"],
    explanation: "This creates a false pattern by selectively choosing examples that fit the narrative while ignoring counterexamples. Many civilizations had currency changes without collapse, and modern economies operate differently than ancient ones."
  },
  {
    id: "38",
    author: {
      name: "Productivity Hacker",
      handle: "@efficiency",
      avatar: "⚡"
    },
    text: "I tried 47 different productivity methods last year and only 3 worked for me. This proves that 94% of productivity advice is useless. Save time and just use the 3 methods that actually work!",
    engagement: {
      likes: 4234,
      retweets: 1876,
      replies: 654
    },
    correctAnswer: "Anecdotal Evidence",
    options: ["Anecdotal Evidence", "Hasty Generalization", "Single Sample Fallacy", "False Precision"],
    explanation: "This generalizes from one person's experience to universal claims. What doesn't work for one individual might work perfectly for others due to different work styles, personalities, circumstances, and preferences."
  },
  {
    id: "39",
    author: {
      name: "Marketing Director",
      handle: "@brandbuilder",
      avatar: "📊"
    },
    text: "Our A/B test showed that the red button increased clicks by 15%. Red buttons are clearly superior. All websites should switch to red buttons for maximum conversion rates!",
    engagement: {
      likes: 2567,
      retweets: 1123,
      replies: 345
    },
    correctAnswer: "Hasty Generalization",
    options: ["Hasty Generalization", "Context Neglect", "Single Test Fallacy", "Overgeneralization"],
    explanation: "This hastily generalizes from one specific context to all websites. Color effectiveness depends on brand, audience, surrounding design, product type, and cultural factors that vary greatly between different websites."
  },
  {
    id: "40",
    author: {
      name: "Wellness Blogger",
      handle: "@mindbodyhealth",
      avatar: "🌱"
    },
    text: "People lived perfectly healthy lives for thousands of years without modern medicine. Our ancestors were naturally healthier. Modern medicine is making us sicker, not healthier!",
    engagement: {
      likes: 3789,
      retweets: 1654,
      replies: 567
    },
    correctAnswer: "Survivorship Bias",
    options: ["Survivorship Bias", "Appeal to Tradition", "Noble Savage Fallacy", "Cherry Picking"],
    explanation: "This is survivorship bias - we only hear about our ancestors who lived long enough to be remembered. Life expectancy was much lower historically, infant mortality was high, and many died from diseases now easily treatable."
  },
  {
    id: "41",
    author: {
      name: "Investment Blogger",
      handle: "@smartmoney",
      avatar: "💰"
    },
    text: "Warren Buffett buys value stocks and he's incredibly successful. Therefore, everyone should only buy value stocks. Growth investing is clearly inferior to value investing.",
    engagement: {
      likes: 2890,
      retweets: 1345,
      replies: 456
    },
    correctAnswer: "Survivorship Bias",
    options: ["Survivorship Bias", "Appeal to Authority", "Hasty Generalization", "Single Example Fallacy"],
    explanation: "This is survivorship bias - focusing on one highly successful value investor while ignoring many unsuccessful value investors and successful growth investors. One person's success doesn't validate a universal strategy."
  },
  {
    id: "42",
    author: {
      name: "Technology Critic",
      handle: "@digitaldetox",
      avatar: "📵"
    },
    text: "Before smartphones, people had real conversations and deeper relationships. Technology is destroying human connection. We should return to the pre-digital era for authentic living.",
    engagement: {
      likes: 4321,
      retweets: 2109,
      replies: 789
    },
    correctAnswer: "Rosy Retrospection",
    options: ["Rosy Retrospection", "Appeal to Tradition", "False Nostalgia", "Cherry Picking"],
    explanation: "This shows rosy retrospection - idealizing the past while ignoring its problems. Pre-smartphone eras had issues like social isolation, limited long-distance communication, and barriers to connection that technology actually helps solve."
  },
  {
    id: "43",
    author: {
      name: "Quantum Physicist",
      handle: "@quantumleap",
      avatar: "⚛️"
    },
    text: "Quantum mechanics shows that consciousness affects reality at the subatomic level. This proves that positive thinking can literally change your life circumstances through quantum effects!",
    engagement: {
      likes: 3567,
      retweets: 1789,
      replies: 567
    },
    correctAnswer: "Quantum Woo",
    options: ["Quantum Woo", "False Analogy", "Misapplied Science", "Appeal to Complexity"],
    explanation: "This misapplies quantum mechanics to macroscopic life situations where it doesn't apply. Quantum effects occur at subatomic scales under specific conditions and don't extend to everyday consciousness or life outcomes."
  },
  {
    id: "44",
    author: {
      name: "Career Advisor",
      handle: "@jobsuccess",
      avatar: "💼"
    },
    text: "I've never met an unsuccessful person who wakes up before 5 AM. Early rising is the secret that separates winners from losers. Success is impossible without early mornings!",
    engagement: {
      likes: 4567,
      retweets: 2234,
      replies: 678
    },
    correctAnswer: "Selection Bias",
    options: ["Selection Bias", "Survivorship Bias", "Anecdotal Evidence", "False Cause"],
    explanation: "This shows selection bias - the advisor likely only meets successful people in professional contexts where early risers might be overrepresented. Many successful people work different schedules, and many early risers are unsuccessful."
  },
  {
    id: "45",
    author: {
      name: "Memory Expert",
      handle: "@brainbooster",
      avatar: "🧠"
    },
    text: "I remember exactly what I was doing when major historical events happened. My memory is photographic and completely accurate. People who say memory is unreliable just have weak minds.",
    engagement: {
      likes: 2345,
      retweets: 987,
      replies: 234
    },
    correctAnswer: "Overconfidence Bias",
    options: ["Overconfidence Bias", "Memory Illusion", "False Confidence", "Dunning-Kruger Effect"],
    explanation: "This shows overconfidence bias about memory accuracy. Research consistently shows that even vivid 'flashbulb' memories of significant events are often inaccurate and change over time, but people remain confident in their false memories."
  },
  {
    id: "46",
    author: {
      name: "Alternative Medicine",
      handle: "@naturalcures",
      avatar: "🌿"
    },
    text: "This herbal remedy has been used for 5,000 years. If it didn't work, people wouldn't have kept using it for so long. Ancient wisdom is often superior to modern science.",
    engagement: {
      likes: 3789,
      retweets: 1567,
      replies: 456
    },
    correctAnswer: "Appeal to Tradition",
    options: ["Appeal to Tradition", "Appeal to Antiquity", "Traditional Wisdom Fallacy", "Historical Fallacy"],
    explanation: "This appeals to tradition by assuming age equals effectiveness. Many practices persisted due to cultural transmission, placebo effects, or lack of alternatives rather than actual efficacy. Bloodletting was also used for thousands of years."
  },
  {
    id: "47",
    author: {
      name: "Social Critic",
      handle: "@societywatch",
      avatar: "👁️"
    },
    text: "Crime rates are higher in areas with more police presence. This proves that police cause crime rather than prevent it. We should reduce police presence to reduce crime!",
    engagement: {
      likes: 2567,
      retweets: 1234,
      replies: 567
    },
    correctAnswer: "Reverse Causation",
    options: ["Reverse Causation", "Correlation vs Causation", "Third Variable Problem", "Confounding Variables"],
    explanation: "This confuses cause and effect (reverse causation). Police are deployed to high-crime areas because crime is already high there, not the other way around. The correlation exists because police respond to crime, not because they create it."
  },
  {
    id: "48",
    author: {
      name: "Debate Champion",
      handle: "@arguepro",
      avatar: "🎯"
    },
    text: "My opponent claims we should increase education funding, but they're a career politician who's never taught a day in their life. How can someone with no classroom experience understand what schools need?",
    engagement: {
      likes: 1987,
      retweets: 743,
      replies: 234
    },
    correctAnswer: "Ad Hominem",
    options: ["Ad Hominem", "Genetic Fallacy", "Appeal to Experience", "Credentialism"],
    explanation: "This is ad hominem - attacking the person's background rather than addressing their education funding arguments. Policy decisions involve many factors beyond personal experience, and non-teachers can have valid insights about education."
  },
  {
    id: "49",
    author: {
      name: "Data Scientist",
      handle: "@bigdatainsights",
      avatar: "📊"
    },
    text: "Our AI model predicted 95% of stock movements correctly in backtesting. This proves our algorithm can beat the market. Invest with us for guaranteed 20% annual returns!",
    engagement: {
      likes: 4321,
      retweets: 2109,
      replies: 789
    },
    correctAnswer: "Overfitting",
    options: ["Overfitting", "Backtesting Bias", "Survivorship Bias", "Curve Fitting"],
    explanation: "This shows overfitting - the model likely memorized patterns in historical data that won't repeat in the future. Backtesting performance often doesn't translate to real-world results due to changing market conditions and the look-ahead bias inherent in optimization."
  },
  {
    id: "50",
    author: {
      name: "Philosophy Professor",
      handle: "@deepthoughts",
      avatar: "🤔"
    },
    text: "We can't prove that reality isn't just a simulation. Since we can't disprove it, we should assume it's true and act accordingly. The burden of proof is on those who claim reality is real.",
    engagement: {
      likes: 3456,
      retweets: 1654,
      replies: 567
    },
    correctAnswer: "Burden of Proof",
    options: ["Burden of Proof", "Argument from Ignorance", "Unfalsifiable Claim", "Russell's Teapot"],
    explanation: "This shifts the burden of proof incorrectly. The person making the positive claim (reality is a simulation) bears the burden of providing evidence, not those who maintain the default position. Inability to disprove something doesn't make it true."
  }
];