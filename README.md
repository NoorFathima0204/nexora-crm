# National Geographic Mobile Performance Optimization Demo

## Digital Heroes Training Task B

A performance analysis and optimization project focused on improving mobile website experience through evidence-based recommendations.

---

# Project Overview

This project audits a real publicly accessible website, identifies mobile performance bottlenecks, prioritizes improvements based on impact and implementation cost, and demonstrates an optimized rebuild of a key section.

---

# Audited Website

**Website:** National Geographic

**Audit Tool:** Google Lighthouse Mobile Audit

---

# Before Optimization Results

| Metric | Result |
|---|---:|
| Performance Score | 26 |
| First Contentful Paint | 4.8s |
| Largest Contentful Paint | 19.4s |
| Total Blocking Time | 4100ms |
| Network Payload | 9MB |

---

# Problems Identified

## JavaScript Performance

- JavaScript execution time: 10.9s
- Unused JavaScript savings: 1,496 KiB

## Main Thread Blocking

- Main thread work: 18.5s
- 20 long tasks detected

## Resource Size

- Total network payload: 9,107 KiB

## Image Optimization

- Missing image dimensions
- Inefficient resource delivery

---

# Optimization Implemented

The demo rebuild includes:

✅ WebP image delivery  
✅ Lazy loading  
✅ Explicit image dimensions  
✅ Reduced page complexity  
✅ Improved semantic HTML structure  

---

# After Optimization Results

| Metric | Before | After |
|---|---:|---:|
| Performance Score | 26 | 55 |
| LCP | 19.4s | 18.6s |
| Total Blocking Time | 4100ms | 20ms |
| Network Payload | 9MB | 3.3MB |

---

# Project Structure
