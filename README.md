<center>
  <a href="https://deploy.workers.cloudflare.com/?url=https://github.com/sudo-self/deploy-button">
    <img src="https://deploy.workers.cloudflare.com/button" alt="Deploy to Cloudflare Workers" />
  </a>
</center>

## Create Your Own "Deploy to Cloudflare Workers" Button

1. **Get your GitHub repository URL**:  
   You need the GitHub repository URL in the format `https://github.com/USERNAME/REPO`, where:
   - `USERNAME` is your GitHub username.
   - `REPO` is the name of your repository.

2. **Construct the deploy button URL**:  
   The deploy button uses a special URL to link to Cloudflare's Workers deployment system. To create this URL, follow this format:

   ```html
   https://deploy.workers.cloudflare.com/?url=https://github.com/USERNAME/REPO

### GitHub Secrets for deploy.yml

1. **Go to your GitHub repository.**
2. Click on **Settings**.
3. In the left sidebar, click on **Secrets and variables** (or **Secrets**).
4. Under **Secrets and variables**, click on **Actions**.
5. Click **New repository secret** to add a new secret.
6. For the **name**, enter `CF_API_TOKEN` and paste your Cloudflare API Token in the **Value** field.
7. Click **Add secret**.
8. Repeat the process to add another secret:
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

