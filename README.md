<center>
  <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/sudo-self/deploy-button">
    <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" />
  </a>
</center>

## <a href="https://bucket.jessejesse.com/deploy.html">deploy with workers button generator</a>


1. **Get your GitHub repository URL**:  
   You need the GitHub repository URL in the format `https://github.com/USERNAME/REPO`, where:
   - `USERNAME` is your GitHub username.
   - `REPO` is the name of your repository.
  
2. **Construct the deploy button URL**:  
   The deploy button uses a special URL to link to Cloudflare's Workers deployment system. To create this URL, follow this format:

   ```html
   https://deploy.workers.cloudflare.com/?url=https://github.com/USERNAME/REPO

### deploy.yml

1. Log in to your Cloudflare dashboard: [Cloudflare Workers Dashboard](https://dash.cloudflare.com/?to=/:account/workers)
2. Your Account ID can be found on the Workers dashboard.

### Get Your Cloudflare API Token

3. Go to your API Tokens page: [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
4. Create a new API token with the appropriate permissions if you don’t have one already.


5. **Go to your GitHub repository.**
5. Click on **Settings**.
7. In the left sidebar, click on **Secrets and variables** (or **Secrets**).
8. Under **Secrets and variables**, click on **Actions**.
9. Click **New repository secret** to add a new secret.
10. For the **name**, enter `CF_API_TOKEN` and paste your Cloudflare API Token in the **Value** field.
11. Click **Add secret**.
12. Repeat the process to add another secret:
   - For the **name**, enter `CF_ACCOUNT_ID` and paste your Cloudflare Account ID in the **Value** field.

### Example GitHub Actions Workflow

GitHub Actions workflow (`.github/workflows/deploy.yml`) to automate deployments:

```yaml
name: Deploy Worker
on:
  push:
  pull_request:
  repository_dispatch:
jobs:
  deploy:
    runs-on: ubuntu-latest
    timeout-minutes: 60
    steps:
      - uses: actions/checkout@v2
      - name: Build & Deploy Worker
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CF_API_TOKEN }}
          accountId: ${{ secrets.CF_ACCOUNT_ID }}

```

