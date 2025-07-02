# Test Case Generator with Impact Analysis

A comprehensive test case generation and impact analysis system that processes user stories from Jira and uploaded documents to automatically generate test cases using LLM (Large Language Models).

## 🎯 Features

- ✅ **Project-based Document Processing**: Organize and process documents by project
- ✅ **Multiple Input Sources**: 
  - Jira integration for fetching user stories
  - Direct file uploads (PDF, DOCX, TXT)
  - Manual story input through UI
- ✅ **Smart Test Case Generation**:
  - Uses Google's Gemini LLM
  - Context-aware test case creation
  - Multiple test case types (positive, negative, boundary, security, performance)
- ✅ **Impact Analysis**:
  - Automated impact analysis for user stories
  - Biometric story analysis
  - User story impact assessment
- ✅ **Vector Database**: LanceDB for efficient story storage and retrieval
- ✅ **Modern Tech Stack**:
  - Backend: Flask API with Python
  - Frontend: Next.js with TypeScript and Tailwind CSS
  - Databases: PostgreSQL (test cases) + LanceDB (vector storage)
- ✅ **Automated Processing**: Scheduler runs every 5 minutes
- ✅ **Project Management**: Full project lifecycle management
- ✅ **Export Functionality**: Export test cases to Excel

## 📁 Current Project Structure

```
Project Root/
├── Backend/
│   ├── app/
│   │   ├── config.py                # Application configuration
│   │   ├── data/
│   │   │   └── success/
│   │   │       └── hp/
│   │   │           ├── biometric_story.txt
│   │   │           ├── impacting_user_story.txt
│   │   │           ├── sample_user_story.txt
│   │   │           └── story_generation_prompt.txt
│   │   ├── datapipeline/           # Document processing pipeline
│   │   │   ├── embedding_generator.py
│   │   │   └── text_extractor.py
│   │   ├── LLM/                    # LLM integration
│   │   │   ├── impact_analyzer.py
│   │   │   ├── Test_case_generator.py
│   │   │   ├── impact_analysis_prompt.txt
│   │   │   └── test_case_prompt.txt
│   │   ├── models/                 # Database models
│   │   │   ├── create_dbs.py
│   │   │   ├── db_service.py
│   │   │   ├── delete_lance_data.py
│   │   │   ├── delete_postgres_data.py
│   │   │   └── postgress_writer.py
│   │   ├── routes/                 # API endpoints
│   │   │   └── stories.py
│   │   ├── scripts/
│   │   │   └── trim_existing_test_cases.py
│   │   ├── services/               # External services
│   │   │   └── jira_integration_improved.py
│   │   └── utils/                  # Utilities
│   │       └── excel_util.py
│   ├── data/                       # Data storage
│   │   ├── uploaded_docs/         # Project document folders
│   │   │   ├── project1/         # Individual project folders
│   │   │   └── project2/
│   │   ├── success/              # Successfully processed files
│   │   │   ├── project1/
│   │   │   └── project2/
│   │   ├── failure/              # Failed processing files
│   │   │   ├── project1/
│   │   │   └── project2/
│   │   ├── lance_db/             # Vector database storage
│   │   │   ├── embeddings/       # Story embeddings
│   │   │   └── indexes/          # Vector indexes
│   │   └── temp/                 # Temporary processing files
│   ├── helper.py                   # Helper utilities
│   ├── JIRA_MULTI_PROJECT_GUIDE.md # Jira integration guide
│   ├── requirements.txt            # Python dependencies
│   ├── run.py                      # Main application
│   ├── scheduler.py                # Automated processing
│   ├── setup_project_folders.py    # Project setup
│   ├── standalone_scheduler.py     # Independent scheduler
│   └── sync_multiple_projects.py   # Multi-project sync
├── frontend/
│   └── test-case-generator/        # Next.js frontend
│       ├── app/
│       │   ├── api/
│       │   │   ├── generate-test-cases/
│       │   │   │   └── route.ts
│       │   │   ├── rag-chat/
│       │   │   └── upload-story/
│       │   │       └── route.ts
│       │   ├── globals.css
│       │   ├── layout.tsx
│       │   ├── loading.tsx
│       │   ├── page.tsx
│       │   ├── story-details/
│       │   │   └── [storyId]/
│       │   │       └── page.tsx
│       │   └── test-cases/
│       │       └── [storyId]/
│       │           └── page.tsx
│       ├── components/
│       │   ├── chatbot.tsx
│       │   ├── theme-provider.tsx
│       │   ├── theme-toggle.tsx
│       │   └── ui/                 # UI components library
│       │       ├── accordion.tsx
│       │       ├── alert-dialog.tsx
│       │       ├── button.tsx
│       │       ├── card.tsx
│       │       └── [other UI components]
│       ├── hooks/
│       │   ├── use-mobile.tsx
│       │   └── use-toast.ts
│       ├── public/                 # Static assets
│       │   ├── innova-logo-new.webp
│       │   ├── innova-logo.png
│       │   ├── Logo-New.svg
│       │   └── [other assets]
│       ├── styles/
│       │   └── globals.css
│       ├── package.json
│       ├── next.config.mjs
│       ├── tailwind.config.ts
│       └── tsconfig.json
├── package-lock.json
├── Readme.md
└── requirements.txt

```

## 🚀 Prerequisites

- Python 3.8+
- Node.js 16+
- PostgreSQL 12+
- Git

## ⚙️ Installation

### 1. Clone the Repository

\`\`\`bash
git clone <repository-url>
cd Test-case-generator
\`\`\`

### 2. Backend Setup

```bash
cd Backend

# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Create required folders
python setup_project_folders.py
```

### 3. Frontend Setup

```bash
cd frontend/test-case-generator
npm install
```

## 🔧 Configuration

### Backend Environment Variables (.env)

Create `Backend/.env` with:

```env
# Database Configuration
POSTGRES_DB=test_case_generator
POSTGRES_USER=your_username
POSTGRES_PASSWORD=your_password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432

# Google AI Configuration
GOOGLE_API_KEY=your_google_api_key
GOOGLE_API_KEY_IMPACT=your_google_api_key  # Can be same as GOOGLE_API_KEY

# Jira Configuration (Optional)
JIRA_BASE_URL=https://your-company.atlassian.net
JIRA_EMAIL=your-email@company.com
JIRA_API_TOKEN=your-api-token
JIRA_SYNC_ENABLED=false
JIRA_PROJECT_KEYS=PROJ1,PROJ2  # Comma-separated project keys
JIRA_SYNC_ALL_PROJECTS=false

# Test Case Generation Configuration
TEST_CASE_COUNT_POSITIVE=50
TEST_CASE_COUNT_NEGATIVE=30
TEST_CASE_COUNT_BOUNDARY=10
TEST_CASE_COUNT_SECURITY=10
TEST_CASE_COUNT_PERFORMANCE=10
```

### Frontend Environment Variables

Create `frontend/test-case-generator/.env.local` with:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_SCHEDULER_API_URL=http://localhost:5001
GOOGLE_GENERATIVE_AI_API_KEY=your_google_api_key
```

## 🏃‍♂️ Running the Application

### 1. Start the Backend

```bash
# Terminal 1: Start the Flask backend
cd Backend
python run.py

# Terminal 2: Start the scheduler
cd Backend
python scheduler.py
```

### 2. Start the Frontend

```bash
# Terminal 3: Start the Next.js frontend
cd frontend/test-case-generator
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Scheduler API: http://localhost:5001

## 📝 Usage Guide

### 1. Project Setup

1. Create project folders in `Backend/data/uploaded_docs/`
2. Place user story documents in respective project folders
3. Documents are automatically processed every 5 minutes

### 2. Document Types

Supported file formats:
- PDF (.pdf)
- Word documents (.docx)
- Text files (.txt)

### 3. Jira Integration

To enable Jira integration:
1. Set up Jira environment variables
2. Set `JIRA_SYNC_ENABLED=true`
3. Configure project keys or enable all projects sync

### 4. Test Case Generation

Test cases are generated:
- Automatically when documents are processed
- Manually through the UI
- Via API endpoints

### 5. Accessing Test Cases

1. View through the web interface
2. Export to Excel
3. Access via API endpoints

## 🔌 API Endpoints

### Stories API

- `GET /api/stories` - List all stories
- `GET /api/stories/{story_id}` - Get story details
- `POST /api/stories/upload` - Upload new story
- `GET /api/stories/test-cases/{story_id}` - Get test cases
- `POST /api/generate-test-cases` - Generate test cases

### Scheduler API

- `GET /api/scheduler/next-reload` - Get next processing time
- `POST /api/scheduler/trigger` - Trigger immediate processing

## 🛠️ Development

### Adding New Features

1. Backend:
   - Add routes in `app/routes/`
   - Add services in `app/services/`
   - Update models in `app/models/`

2. Frontend:
   - Add pages in `app/`
   - Add components in `components/`
   - Update API calls in `lib/api.ts`

### Testing

```bash
# Backend tests
cd Backend
pytest

# Frontend tests
cd frontend/test-case-generator
npm test
```

## 🔍 Troubleshooting

### Common Issues

1. **Database Connection**
   - Verify PostgreSQL is running
   - Check database credentials
   - Ensure database exists

2. **File Processing**
   - Check file permissions
   - Verify supported file types
   - Check file encoding (UTF-8)

3. **API Issues**
   - Verify backend is running
   - Check CORS settings
   - Validate API endpoints

4. **LLM Integration**
   - Verify Google API key
   - Check API quotas
   - Monitor rate limits

## 📚 Additional Resources

- [Jira API Documentation](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/)
- [Google AI Documentation](https://ai.google.dev/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Flask Documentation](https://flask.palletsprojects.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.




++++++++++++++++++++++++++++++++++++++++
   FLASK_APP=run.py
   FLASK_ENV=development
   POSTGRES_DB=my_postgres_db_demo
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=0000
   POSTGRES_HOST=localhost
   POSTGRES_PORT=5432

   LANCE_DB_PATH=Backend\data\lance_db
   TABLE_NAME_LANCE=user_stories_demo

   GOOGLE_API_KEY=AIzaSyBBID891dTdhAU8B51E8N6-DY_xqpMSJvo
   GOOGLE_GENERATIVE_AI_API_KEY=AIzaSyA0TmMF5MQ18oCljPTVZmo8TxS1zlOHg6M
   GEMINI_API_KEY_IMPACT=AIzaSyAVPLTlPw2e0vPJHZp7a71V1IYOe72xMw0
   optional_api_keys=[AIzaSyBHMUZMB1SwBtWUJOGCkkqbyu2FRst9RB8,AIzaSyDlHeKwQ5qHLr5hV1_1Zkzctl1W5b5oE6Q]

   UPLOAD_FOLDER=Backend\data\uploaded_docs
   SUCCESS_FOLDER=Backend\data\success
   FAILURE_FOLDER=Backend\data\failure


JIRA_BASE_URL=https://team-delta-innovasolutions.atlassian.net/
JIRA_EMAIL=kaushik24062004@gmail.com
JIRA_API_TOKEN=ATATT3xFfGF0a4KtL9RUftnvMUUAY3JaXH37_pl71TR9i-gOjycj7NoIfmZdVY0N3e3fQJFXZz7FlHToV70yHh8H_Vjpqk5-8ylbzNp6n8LgpK0JsVQTXFFvnvCgU-u_jEwHLQNpfx5os07dRQD2BZ9WLqiBJypvAMQ-yhICh_jQmWrk-fXVbO8=86642574
JIRA_PROJECT_KEYS=TIC,CICD
JIRA_MAX_RESULTS=100
JIRA_BATCH_SIZE=50
JIRA_RATE_LIMIT_DELAY=1.0
JIRA_RETRY_ATTEMPTS=3
JIRA_RETRY_BACKOFF_FACTOR=2.0
JIRA_SYNC_ENABLED=true
JIRA_SYNC_ALL_PROJECTS=false

   ==============================================