# Amazon Bullet Point Writer Walkthrough

The application is fully set up and running! Here is how to use it.

## 1. Access the Application
The frontend is running at: **[http://localhost:5173](http://localhost:5173)**

## 2. Usage Flow

### Create a Base Run
1. Click **+ New Run** in the navigation bar.
2. Enter your product ASIN (e.g., `B08N5KDC9Z`).
3. Enter competitor ASINs (comma separated, e.g., `B07VGRJDFY, B09G9F5S93`).
4. Click **Start Analysis**.

### View Progress
1. You will be redirected to the **Dashboard**.
2. Click **View Details** on the newly created run.
3. Observe the status changing automatically:
   - `PENDING` -> `SCRAPING` (5s mock delay)
   - `SCRAPING` -> `ANALYZING` (5s mock delay)
   - `ANALYZING` -> `COMPLETE` (3s mock delay)

### View Results
Once the status is **COMPLETE**:
- Click the **Generated Bullets** tab to see the AI-written bullet points.
- Explore **Reviews** and **Themes** tabs to see the underlying data (mock data for now).

## 3. Mock Data
Currently, the application uses **mock services** for Scraping and Analysis to demonstrate the flow without needing live API keys immediately.
- **Run Duration**: Approx 13 seconds total.
- **Data**: You will see simulated themes and bullet points appear after completion.

## 4. Next Steps (Productionizing)
To make this real:
1. Update `server/.env` with actual `APIFY_API_TOKEN` and `ANTHROPIC_API_KEY`.
2. Implement real logic in `server/services/scrapingService.js` and `analysisService.js` to replace the mocks.
